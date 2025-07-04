import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, catchError, filter, map, of, switchMap, take, takeLast, takeUntil, takeWhile, tap } from 'rxjs';
import { CategoryService } from 'src/app/core/category.service';
import { ItemService } from 'src/app/core/item.service';
import { Item } from 'src/app/shared/models/item.model';
import { Status } from 'src/app/shared/models/status.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private itemService = inject(ItemService);
    public categoryService = inject(CategoryService);
    private destroy$ = new Subject<void>();
    public id = "";
    public status$ = new BehaviorSubject<Status>('initial');
    private idParamMap$ = this.route.paramMap
      .pipe(
        map((paramMap: ParamMap) => paramMap.get('id')),
        filter(Boolean),
        tap(id => this.id = id)
      );
    public item$: Observable<Item | null> = this.idParamMap$
      .pipe(
        switchMap(itemId =>  this.itemService.item$(parseInt(itemId))),
        catchError(err => of(null))
      );

    ngOnInit(): void {
      // [Set] status$ 'pending' [When] idParamMap$ emit
      this.idParamMap$
        .pipe(
          takeUntil(this.destroy$)
        )
        .subscribe(
          () => this.status$.next('pending')
        );
      // [Set] status$ 'succces' or 'error' [When] product$ emit
      this.item$
        .pipe(
          takeUntil(this.destroy$)
        )
        .subscribe(
          item => {
            if (item) {
              this.status$.next('success')
            } else {
              this.status$.next('error')
              this.router.navigate(['error','404']);
            }
          }
        )
    }

    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }

    public addItemToCart(id: number): void {
      //this.cartService.addProduct(id);
    }
}
