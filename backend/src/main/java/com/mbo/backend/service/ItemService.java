package com.mbo.backend.service;

import com.mbo.backend.entity.Item;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ItemService {
    Page<Item> getItems(String query, Integer page, Integer size);
    List<Item> getItems(String query);
    List<Item> getItemsByCategoryName(String categoryName);
    List<Item> getItemsByCategoryId(Long categoryId);
    Item getItemById(Long id);
    Item addItem(Item item);
    Page<Item> searchItems(String query, Integer page, Integer size);
    List<Item> searchItems(String query);
}
