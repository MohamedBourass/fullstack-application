package com.mbo.backend.steps;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ApiTestService {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    public ResponseEntity<String> post(String endpoint, Map<String, String> data) {
        String url = "http://localhost:" + port + endpoint;
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Map<String, String>> entity = new HttpEntity<>(data, headers);
        return restTemplate.postForEntity(url, entity, String.class);
    }

    public ResponseEntity<String> get(String endpoint) {
        String url = "http://localhost:" + port + endpoint;
        return restTemplate.getForEntity(url, String.class);
    }

    public ResponseEntity<String> post(String endpoint) {
        String url = "http://localhost:" + port + endpoint;
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> entity = new HttpEntity<>("", headers);
        return restTemplate.postForEntity(url, entity, String.class);
    }
}
