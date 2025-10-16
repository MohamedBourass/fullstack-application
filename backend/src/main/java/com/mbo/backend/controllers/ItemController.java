package com.mbo.backend.controllers;

import com.mbo.backend.dto.request.ItemRequest;
import com.mbo.backend.dto.response.ItemResponse;
import com.mbo.backend.dto.response.PageableResponse;
import com.mbo.backend.entities.Item;
import com.mbo.backend.services.ItemService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
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
    private final ModelMapper modelMapper;

    // GET api/v1/item
    // GET api/v1/item?q={Abc}
    @SneakyThrows
    @GetMapping
    public ResponseEntity<PageableResponse> getItems(
            // @RequestParam(name = "category", required = false) String category,
            @RequestParam(name = "q", required = false) String query,
            @RequestParam(name = "pageNumber", required = true) Integer pageNumber, // -> pageIndex
            @RequestParam(name = "pageSize", required = true) Integer pageSize
    ) {
        // TODO: use modelMappings
        Page<Item> itemPage = itemService.getItems(query, pageNumber, pageSize);
        PageableResponse<ItemResponse> pageableResponse = new PageableResponse<ItemResponse>(itemPage.getTotalElements(), itemPage.getContent().stream().map(product -> modelMapper.map(product, ItemResponse.class)).toList());
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(pageableResponse);
    }

    // POST api/v1/product {ProductRequest}
    @PostMapping
    public ResponseEntity<ItemResponse> saveItem(@Valid @RequestBody ItemRequest itemRequest) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        modelMapper.map(
                                itemService.addItem(
                                        modelMapper.map(itemRequest, Item.class)
                                ),
                                ItemResponse.class
                        )
                );
    }

    // GET api/v1/product/{id}
    @GetMapping("/{id}")
    public ResponseEntity<ItemResponse> getItemById(@PathVariable(name = "id") Long id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(
                        modelMapper.map(itemService.getItemById(id), ItemResponse.class)
                );
    }
}