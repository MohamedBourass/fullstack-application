package com.mbo.backend.controllers;

import com.mbo.backend.entities.Item;
import com.mbo.backend.services.ItemService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/item")
public class ItemController {

    private final ItemService itemService;

    // GET api/v1/item
    // GET api/v1/item?q={Abc}
    @SneakyThrows
    @GetMapping
    public ResponseEntity<Page<Item>> getItems(
            // @RequestParam(name = "category", required = false) String category,
            @RequestParam(name = "q", required = false) String query,
            @RequestParam(name = "pageNumber", required = true) Integer pageNumber, // -> pageIndex
            @RequestParam(name = "pageSize", required = true) Integer pageSize
    ) {
        Page<Item> itemPage = itemService.getItems(query, pageNumber, pageSize);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(itemPage);
    }

    // POST api/v1/product {ProductRequest}
    @PostMapping
    public ResponseEntity<Item> saveItem(@Valid @RequestBody Item itemRequest) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        itemService.addItem(itemRequest)
                );
    }

    // GET api/v1/product/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable(name = "id") Long id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(
                        itemService.getItemById(id)
                );
    }
}