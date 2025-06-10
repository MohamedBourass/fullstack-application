package com.mbo.backend.config;

import com.mbo.backend.entity.Item;
import com.mbo.backend.entity.Category;
import com.mbo.backend.entity.User;
import com.mbo.backend.model.Role;
import com.mbo.backend.repository.CategoryRepository;
import com.mbo.backend.repository.ItemRepository;
import com.mbo.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Component
@RequiredArgsConstructor
@Slf4j
public class DatabaseInitializer implements CommandLineRunner {

    private final UserRepository userRepository;

    private final ItemRepository itemRepository;

    private final CategoryRepository categoryRepository;

    private final PasswordEncoder passwordEncoder;

    public void run(String... args) {

        Category category1 = Category.builder().name("todo").description("todo list").build();
        //ItemCategory category2 = ItemCategory.builder().name("").description("").build();
        //ItemCategory category3 = ItemCategory.builder().name("").description("").build();

        categoryRepository.saveAll(
                List.of(category1)
        );

        itemRepository.saveAll(
            List.of(
                    Item.builder()
                        .name("Course")
                        .shortDescription("course list")
                        .category(category1)
                        .build()
            )
        );

        userRepository.saveAll(
            List.of(
                  User.builder()
                      .firstname("Moh")
                      .lastname("Cars")
                      .email("test@example.com")
                      .password(passwordEncoder.encode("test123"))
                      .roles(Set.of(Role.USER))
                      .build(),
                  User.builder()
                      .firstname("Jem")
                      .lastname("Toc")
                      .email("admin@example.com")
                      .password(passwordEncoder.encode("test123"))
                      .roles(Set.of(Role.ADMIN))
                      .build()
            )
        );
    }
}