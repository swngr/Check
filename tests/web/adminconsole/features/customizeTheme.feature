Feature: Customize theme

Background:
    Given I open the login page
    When I use the credentials

  @customizeTheme
  Scenario: User can see the Customize Theme page
    When I open the "Customize Theme" page
    Then I see the Customize Theme page loads correctly