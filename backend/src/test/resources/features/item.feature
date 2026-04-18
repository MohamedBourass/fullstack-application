Feature: Item Endpoints

  Scenario: Get all items with pagination
    Given the application is running
    And the database contains the following items:
      | name              | shortDescription |
      | Laptop            | High performance  |
      | USB Cable         | 3 meters          |
    When I send a GET request to "/api/v1/item?pageNumber=0&pageSize=10"
    Then the response status code should be 200
    And the response should contain a pageable result

  Scenario: Search items by query
    Given the application is running
    And the database contains items with names:
      | Laptop     |
      | Tablet     |
      | Desktop    |
    When I send a GET request to "/api/v1/item?q=Laptop&pageNumber=0&pageSize=10"
    Then the response status code should be 200
    And the response content should have 1 item with name containing "Laptop"

  Scenario: Get item by ID
    Given the application is running
    And an item with name "USB Cable" exists
    When I send a GET request to "/api/v1/item/{itemId}"
    Then the response status code should be 200
    And the response should have a "name" field with value "USB Cable"

  Scenario: Create a new item
    Given the application is running
    And a category with name "Electronics" exists
    When I send a POST request to "/api/v1/item" with:
      | name                | Wireless Mouse    |
      | shortDescription    | Ergonomic mouse   |
      | category.id         | 1                 |
    Then the response status code should be 201
    And the response should have a "name" field with value "Wireless Mouse"

  Scenario: Create item with invalid data should fail
    Given the application is running
    When I send a POST request to "/api/v1/item" with:
      | name | |
    Then the response status code should be 400

  Scenario: Get item with invalid ID should fail
    Given the application is running
    When I send a GET request to "/api/v1/item/9999"
    Then the response status code should be 500

