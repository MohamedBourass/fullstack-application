package com.mbo.backend;

import com.mbo.backend.config.SecurityConfig;
import com.mbo.backend.controller.CountryController;
import com.mbo.backend.model.Country;
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

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class BackApplicationTests {

    @LocalServerPort
    private int port;

    @MockBean
    private SecurityFilterChain securityFilterChain; //To avoid that spring-security block the endpoints access

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private ApplicationContext context;


    @Test
    @Order(1)
    public void checkIsLoaded() {
        assertThat(port).isNotNull();
        assertThat(securityFilterChain).isNotNull();
        assertThat(restTemplate).isNotNull();
        assertThat(context).isNotNull();

        //Check beans are well loaded in the context
        assertThat(context.getBean(SecurityConfig.class)).isNotNull();
        assertThat(context.getBean(CountryController.class)).isNotNull();
    }

    @BeforeAll
    public static void setUp() {
    }

    @Test
    public void testGetCountry() {
        String url = "http://localhost:" + port + "/api/v1/country";
        ResponseEntity<Country[]> response = restTemplate.getForEntity(url, Country[].class);
        Country[] countries = response.getBody();

        SoftAssertions softAssertions = new SoftAssertions();
        softAssertions.assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        softAssertions.assertThat(countries).isNotNull().hasSize(54);
        softAssertions.assertAll();
    }
}
