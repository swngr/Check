@Clienteling
Feature: Customer Profile

  @customerProfile
  Scenario: User can login with valid credentials
    Given I launch the clienteling app
    When I am on Workspace
    Then I should be able to login with Kim

  @customerProfile @Pending
  Scenario: User can search for a customer
    Given I launch the clienteling app
    When I search for Automation User in All Customer tab 
    Then I should see Automation User in the search results
