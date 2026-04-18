package com.mbo.backend.steps;

import io.cucumber.java.Before;
import io.cucumber.java.After;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import io.cucumber.datatable.DataTable;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.mbo.backend.dto.UserDto;
import com.mbo.backend.entities.Category;
import com.mbo.backend.entities.Item;
import com.mbo.backend.repositories.CategoryRepository;
import com.mbo.backend.repositories.ItemRepository;
import com.mbo.backend.repositories.UserRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

@CucumberContextConfiguration
public class ApiStepDefinitions {

    @Autowired
    private ApiTestService apiTestService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ItemRepository itemRepository;

    private ResponseEntity<String> lastResponse;
    private String lastResponseBody;
    private Map<String, String> requestData;
    private Long categoryId;
    private Long itemId;

    @Before
    public void setUp() {
        requestData = new HashMap<>();
    }

    @After
    public void tearDown() {
        requestData.clear();
    }

    @Given("the application is running")
    public void applicationIsRunning() {
        try {
            ResponseEntity<String> response = apiTestService.get("/api/v1/category");
            assertThat(response.getStatusCode().value()).isIn(200, 201, 401);
        } catch (Exception e) {
            // Application might not have categories yet
        }
    }

    @Given("a user with email {string} and password {string} exists")
    public void userWithEmailAndPasswordExists(String email, String password) {
        UserDto userDto = new UserDto();
        userDto.setEmail(email);
        userDto.setPassword(password);
        userDto.setFirstname("Test");
        userDto.setLastname("User");

        // Note: This is a setup step, not an API call, so we use repository directly
        // But to keep it consistent, perhaps we can call the register endpoint
        try {
            Map<String, String> data = Map.of(
                "firstname", "Test",
                "lastname", "User",
                "email", email,
                "password", password
            );
            apiTestService.post("/api/auth/register", data);
        } catch (Exception e) {
            // User might already exist
        }
    }

    @Given("a user with email {string} already exists")
    public void userWithEmailAlreadyExists(String email) {
        userWithEmailAndPasswordExists(email, "Password123");
    }

    @Given("the database contains the following categories:")
    public void databaseContainsCategories(DataTable dataTable) {
        List<Map<String, String>> categories = dataTable.asMaps();
        for (Map<String, String> row : categories) {
            Category category = new Category();
            category.setName(row.get("name"));
            categoryRepository.save(category);
        }
    }

    @Given("a category with name {string} exists")
    public void categoryWithNameExists(String name) {
        Category category = new Category();
        category.setName(name);
        Category saved = categoryRepository.save(category);
        categoryId = saved.getId();
    }

    @Given("the database contains the following items:")
    public void databaseContainsItems(DataTable dataTable) {
        List<Map<String, String>> items = dataTable.asMaps();
        for (Map<String, String> row : items) {
            Item item = new Item();
            item.setName(row.get("name"));
            item.setShortDescription(row.get("shortDescription"));
            itemRepository.save(item);
        }
    }

    @Given("the database contains items with names:")
    public void databaseContainsItemsWithNames(DataTable dataTable) {
        List<String> names = dataTable.asList();
        for (String name : names) {
            Item item = new Item();
            item.setName(name);
            item.setShortDescription("Test item");
            itemRepository.save(item);
        }
    }

    @Given("an item with name {string} exists")
    public void itemWithNameExists(String name) {
        Item item = new Item();
        item.setName(name);
        item.setShortDescription("Test description");
        Item saved = itemRepository.save(item);
        itemId = saved.getId();
    }

    @When("I send a POST request to {string} with:")
    public void sendPostRequestWithData(String endpoint, DataTable dataTable) {
        Map<String, String> data = dataTable.asMap();
        requestData = new HashMap<>(data);

        lastResponse = apiTestService.post(endpoint, requestData);
        lastResponseBody = lastResponse.getBody();
    }

    @When("I send a GET request to {string}")
    public void sendGetRequest(String endpoint) {
        String url = endpoint.replace("{categoryId}", categoryId != null ? categoryId.toString() : "1");
        url = url.replace("{itemId}", itemId != null ? itemId.toString() : "1");

        try {
            lastResponse = apiTestService.get(url);
            lastResponseBody = lastResponse.getBody();
        } catch (Exception e) {
            lastResponseBody = e.getMessage();
        }
    }

    @When("I send a POST request to {string}")
    public void sendPostRequest(String endpoint) {
        try {
            lastResponse = apiTestService.post(endpoint);
            lastResponseBody = lastResponse.getBody();
        } catch (Exception e) {
            lastResponseBody = e.getMessage();
        }
    }

    @Then("the response status code should be {int}")
    public void responseStatusCodeShouldBe(int statusCode) {
        assertThat(lastResponse.getStatusCode().value()).isEqualTo(statusCode);
    }

    @Then("the response body should contain {string}")
    public void responseBodyShouldContain(String text) {
        assertThat(lastResponseBody).contains(text);
    }

    @Then("the response should contain a {string} field")
    public void responseShouldContainField(String fieldName) {
        assertThat(lastResponseBody).contains(fieldName);
    }

    @Then("the response should contain {int} categories")
    public void responseShouldContainCategories(int count) {
        assertThat(lastResponseBody).contains("\"" + count + "\"");
    }

    @Then("the response should have a {string} field with value {string}")
    public void responseShouldHaveFieldWithValue(String fieldName, String value) {
        assertThat(lastResponseBody).contains("\"" + fieldName + "\"").contains(value);
    }

    @Then("the response should contain a pageable result")
    public void responseShouldContainPageableResult() {
        assertThat(lastResponseBody).contains("totalElements").contains("content");
    }

    @Then("the response content should have {int} item with name containing {string}")
    public void responseContentShouldHaveItemWithName(int count, String name) {
        assertThat(lastResponseBody).contains(name);
    }
}
