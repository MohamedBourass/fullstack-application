package com.mbo.backend.service.impl;

import com.mbo.backend.entity.Item;
import com.mbo.backend.repository.CategoryRepository;
import com.mbo.backend.repository.ItemRepository;
import com.mbo.backend.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@RequiredArgsConstructor
@Service
public class ItemServiceImpl implements ItemService {
    private final ItemRepository itemRepository;
    private final CategoryRepository categoryRepository;

    @Override
    public Page<Item> getItems(String query, Integer pageNumber, Integer pageSize) {
        return query == null ? itemRepository.findAll(PageRequest.of(pageNumber, pageSize)) : searchItems(query, pageNumber, pageSize);
    }

    @Override
    public List<Item> getItems(String query) {
        return query == null ? itemRepository.findAll(): searchItems(query);
    }

    @Override
    public List<Item> getItemsByCategoryName(String categoryName) {
        return itemRepository.findByCategoryId(
                categoryRepository
                        .findByName(categoryName)
                        .orElseThrow(() -> new NoSuchElementException("ProductCategory with name='%s' not found".formatted(categoryName)))
                        .getId()
        );
    }

    @Override
    public List<Item> getItemsByCategoryId(Long categoryId) {
        return itemRepository.findByCategoryId(categoryId);
    }

    @Override
    public Item getItemById(Long id) {
        return itemRepository
                .findById(id)
                .orElseThrow(() -> new NoSuchElementException("Product with id='%d' not found".formatted(id)));
    }

    @Override
    public Item addItem(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public Page<Item> searchItems(String query, Integer pageNumber, Integer pageSize) {
        return itemRepository.findByNameContainingIgnoreCase(query, PageRequest.of(pageNumber, pageSize));
    }

    @Override
    public List<Item> searchItems(String query) {
        return itemRepository.findByNameContainingIgnoreCase(query);
    }
}
