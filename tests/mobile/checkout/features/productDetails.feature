@Smoke @Checkout
Feature: Products Page
  
  @ProductDetails
  Scenario: User can view the chosen item in Product Details 
    Given The user can access the main product categories on a store
    When The user selects a product from the catalog
    Then The user is able to see the chosen item in the Product Details page

    
