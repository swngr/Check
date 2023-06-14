Feature: Main Page for Admin Console

  @login
  Scenario: User can login with valid credentials
    Given I open the login page
    When I use the credentials
    Then I should be able to see the main page