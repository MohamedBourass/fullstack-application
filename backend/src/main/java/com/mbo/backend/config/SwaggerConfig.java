package com.mbo.backend.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "Fullstack Application API",
                version = "1.0",
                description = "API documentation for the fullstack application"
        )
)
public class SwaggerConfig {
}
