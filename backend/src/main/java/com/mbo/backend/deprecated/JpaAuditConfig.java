package com.mbo.backend.deprecated;

import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.AuditorAware;

//@Configuration
//@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
public class JpaAuditConfig {
    @Bean
    public AuditorAware<String> auditorProvider() {
        return new AuditorAwareImpl();
    }
}