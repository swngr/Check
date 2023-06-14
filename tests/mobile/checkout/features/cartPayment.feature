
@Smoke @Payment @Checkout
Feature: Cart payment

    Background: User logs in with valid credentials after Checkout application is loaded
        When The user logs in with valid credentials


    @C1071 @C1072 @C1073 @C1075 @C1076
    @Debit
    Scenario: User can pay with debit card method
        Given The user has an existing order "in store"
        When The user goes to check out
        When The user pays using debit
        Then The user gets a successful message after "paying by debit"

    @Cash
    Scenario: User can pay with cash method
        Given The user has an existing order "in store"
        When The user goes to check out
        When The user pays using cash
        Then The user gets a successful message after "paying by cash"

    @Remotepay
    Scenario: User can pay with remote pay method by email
        Given The user has an existing order "for delivery"
        When The user selects a customer and goes to check out
        When The user pays using remote pay
        Then The user gets a successful message after "using remote pay by email"
        
    @Remotepaysms
    Scenario: User can pay with remote pay method by sms
        Given The user has an existing order "for delivery"
        When The user selects a customer and goes to check out
        When The user pays using remote pay via sms
        Then The user gets a successful message after "using remote pay by sms"

    @Split
    Scenario: User can pay after spliting payment methods
        Given The user has an existing order "in store"
        When The user goes to check out
        When The user splits the payment
        Then The user gets a successful message after "split payment"
