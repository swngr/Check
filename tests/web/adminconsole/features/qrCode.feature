Feature: Manage QR code in General Section

  Background:
    Given I open the login page
    When I use the credentials

  @qrCode
  Scenario: User can see the QR code
    When I open the "QR code" page
    Then I see the QR page loads correctly