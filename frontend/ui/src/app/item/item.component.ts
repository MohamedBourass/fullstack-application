import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, combineLatest, delay, map, switchMap, take, takeUntil, tap } from 'rxjs';
//import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/core/category.service';
import { ItemService } from 'src/app/core/item.service';
import { PaginatorOpts } from 'src/app/shared/models/paginator.opts.model';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-items',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {
  /* Paginator (1) */
  length = 0;
  pageSizeOptions = [6, 12, 24];
  /* Events */
  private destroy$ = new Subject<void>();
  /* States (1) */
  public query$: BehaviorSubject<string> = new BehaviorSubject("");
  private loadingStatusSubject$ = new BehaviorSubject<boolean>(false);
  public loadingStatus$ = this.loadingStatusSubject$;
  private paginatorOpts$: BehaviorSubject<PaginatorOpts> = new BehaviorSubject<PaginatorOpts>({pageIndex: 0, pageSize: this.pageSizeOptions[0]});
  /* Paginator (2) */
  pageSize = this.paginatorOpts$.value.pageSize;
  pageIndex = this.paginatorOpts$.value.pageIndex;
  /* States (2)*/
  public items$: Observable<Item[]> =
    combineLatest([this.query$.pipe(takeUntil(this.destroy$)), this.paginatorOpts$.pipe(takeUntil(this.destroy$))])
      .pipe(
        tap(() => this.loadingStatusSubject$.next(true)),
        switchMap(([query, {pageIndex, pageSize}]) => this.itemService.items$(query, pageIndex, pageSize)),
        tap(() => this.loadingStatusSubject$.next(false)),
        tap(res => this.length = res.total),
        map(res => res.list),
        takeUntil(this.destroy$)
      );

  constructor(
    public categoryService: CategoryService,
    public itemService: ItemService,
    //private cartService: CartService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // [Set] pageIndex, pageSize [Do] scroll window to top [When] paginatorOpts$
    this.paginatorOpts$
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(paginatorOpts => {
      this.pageIndex = paginatorOpts.pageIndex;
      this.pageSize = paginatorOpts.pageSize;
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  //addProductToCart(id: number): void {
  //  this.cartService.addProduct(id);
  //}

  selectItem(id: number) {
    this.router.navigate(['/items', id]).then();
  }

  handlePageEvent(e: PageEvent): void {
    // Emit new paginator options
    this.paginatorOpts$.next({pageIndex: e.pageIndex, pageSize: e.pageSize});
  }

  handleQueryEvent(query: string): void {
    // Emit new paginator options (set pageIndex = 0)
    this.paginatorOpts$.next({...this.paginatorOpts$.value, pageIndex: 0})
    // Emit new query
    this.query$.next(query);
  }

}
