package com.mbo.backend;

import com.mbo.backend.config.SecurityConfig;
import com.mbo.backend.controller.UserController;
import com.mbo.backend.entity.Category;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.context.ApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.SecurityFilterChain;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class BackApplicationTests {

    @LocalServerPort
    private int port;

    @MockBean
    private SecurityFilterChain securityFilterChain; //To avoid that spring-security block the endpoints access

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private ApplicationContext context;

    @BeforeAll
    public void setUp() {
        assertThat(port).isNotNull();
        assertThat(securityFilterChain).isNotNull();
        assertThat(restTemplate).isNotNull();
        assertThat(context).isNotNull();

        //Check beans are well loaded in the context
        assertThat(context.getBean(SecurityConfig.class)).isNotNull();
        assertThat(context.getBean(UserController.class)).isNotNull();
    }

    @Test
    public void testGetCategory() {
        String url = "http://localhost:" + port + "/api/v1/category";

        ResponseEntity<Category[]> response = restTemplate.getForEntity(url, Category[].class);
        Category[] categoryArray = response.getBody();

        SoftAssertions softly = new SoftAssertions();
        softly.assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        softly.assertThat(categoryArray).isNotNull().hasSize(1);
        softly.assertAll();
    }
}
