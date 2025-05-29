package com.mbo.backend;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mbo.backend.model.Country;
import lombok.SneakyThrows;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class CountryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private SecurityFilterChain securityFilterChain;

    @Test
    @SneakyThrows
    public void testGetCountry() {
        String responseBody = this.mockMvc
                .perform(MockMvcRequestBuilders.get("/api/v1/country"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(content().contentType("application/json"))
                .andReturn()
                .getResponse()
                .getContentAsString();
        ObjectMapper objectMapper = new ObjectMapper();

        Country[] countries = objectMapper.readValue(responseBody, Country[].class);
        assertThat(countries.length).isEqualTo(54);

    }
}