Feature: Authentication Endpoints

  Scenario: Register a new user successfully
    Given the application is running
    When I send a POST request to "/api/auth/register" with:
      | firstname | John      |
      | lastname  | Doe       |
      | email     | john@example.com |
      | password  | Password123 |
    Then the response status code should be 201
    And the response body should contain "User registered successfully"

  Scenario: Register with existing email should fail
    Given the application is running
    And a user with email "existing@example.com" already exists
    When I send a POST request to "/api/auth/register" with:
      | firstname | Jane      |
      | lastname  | Doe       |
      | email     | existing@example.com |
      | password  | Password123 |
    Then the response status code should be 201
    And the response body should contain "Email already registered"

  Scenario: Authenticate user with valid credentials
    Given the application is running
    And a user with email "test@example.com" and password "Password123" exists
    When I send a POST request to "/api/auth/authenticate?email=test@example.com&password=Password123"
    Then the response status code should be 200
    And the response should contain a "token" field

  Scenario: Authenticate user with invalid credentials should fail
    Given the application is running
    When I send a POST request to "/api/auth/authenticate?email=invalid@example.com&password=InvalidPassword"
    Then the response status code should be 401

