#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: As a user I want to login to the Retail Store portal
  and from there purchase items and also view my purchases

  @login
  Scenario: Retail Store Portal Login
    Given User enters log in portal
    When user enters the portal link
    And enters the email as "abc@gmail.com"
    And enters password as 2468
    And user logs in
    Then credentials are verified
    And user is redirected to the main page

  @purchase
  Scenario: Retail Store Portal purchase
    Given User is displayed with the stock present
    When user logs in
    And user selects the items to purchase
    And user enters the quantities
    Then selected items and quantities are validated
    And user is asked to either confirm purchase or select more items

  @purchase
  Scenario Outline: Retail Store Portal purchase
    Given User is displayed with the stock present
    When user logs in
    And user selects the items to purchase as <items>
    And user enters the quantities as <quantities>
    Then selected items and quantities are validated
    And user is asked to either confirm purchase or select more items

    Examples: 
      | items  | quantities |
      | Empathy-Do |     4 |
      | The Finisher |     2 |

  @confirm
  Scenario: Purchase Confirmation
    Given User confirms purchase
    When finishing with item selection
    And order details are placed
    And total amount to be paid is displayed
    And Bill id is also displayed
    Then purchase is confirmed
    And order details and stored in inventory

  @view
  Scenario: Purchase History
    Given User is displayed the purchase history
    When selecting View Purchases
