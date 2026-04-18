Feature: Category Endpoints

  Scenario: Get all categories
    Given the application is running
    And the database contains the following categories:
      | name         |
      | Electronics  |
      | Clothing     |
    When I send a GET request to "/api/v1/category"
    Then the response status code should be 200
    And the response should contain 2 categories

  Scenario: Get category by ID
    Given the application is running
    And a category with name "Electronics" exists
    When I send a GET request to "/api/v1/category/{categoryId}"
    Then the response status code should be 200
    And the response should have a "name" field with value "Electronics"

  Scenario: Create a new category
    Given the application is running
    When I send a POST request to "/api/v1/category" with:
      | name | Books |
    Then the response status code should be 201
    And the response should have a "name" field with value "Books"

  Scenario: Get category with invalid ID should fail
    Given the application is running
    When I send a GET request to "/api/v1/category/9999"
    Then the response status code should be 500

