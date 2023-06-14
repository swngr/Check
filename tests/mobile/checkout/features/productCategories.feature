@Smoke @Checkout
Feature: Store

  @ProductCategories
  Scenario: User can see the store catalog
    When The user logs in with valid credentials
    When The user selects a store
    Then The user can see the main product categories
