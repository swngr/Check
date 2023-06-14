
@Smoke @Checkout @Itemdisc
Feature: Item Discounts

Background: User logs in with valid credentials after Checkout application is loaded
        When The user logs in with valid credentials
    
    Scenario: User can apply item percentage discount through mini-cart
        Given The user has an existing order "in store"
        When The user goes to the item added in the mini-cart
        When The user applies an item discount based on "percentage"
        Then The discount is shown in the order line items and the order total is updated

    Scenario: User can apply item amount discount through mini-cart
        Given The user has an existing order "in store"
        When The user goes to the item added in the mini-cart
        When The user applies an item discount based on "amount"
        Then The discount is shown in the order line items and the order total is updated    