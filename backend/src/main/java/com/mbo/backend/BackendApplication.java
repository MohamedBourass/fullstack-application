package com.mbo.backend;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@Slf4j
@SpringBootApplication
public class BackendApplication {

    public static void main( String[] args ) {
        log.info("The application is going to start...");
        SpringApplication.run(BackendApplication.class, args);
    }
}
