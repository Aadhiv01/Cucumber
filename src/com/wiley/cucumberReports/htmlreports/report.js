$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:com/wiley/features/RetailStore.feature");
formatter.feature({
  "name": "As a user I want to login to the Retail Store portal",
  "description": "  and from there purchase items and also view my purchases",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Retail Store Portal Login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enters log in portal",
  "keyword": "Given "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_enters_log_in_portal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the portal link",
  "keyword": "When "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_enters_the_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the email as \"abc@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.enters_the_email_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters password as 2468",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.enters_password_as(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "credentials are verified",
  "keyword": "Then "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.credentials_are_verified()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to the main page",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_is_redirected_to_the_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Retail Store Portal purchase",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@purchase"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is displayed with the stock present",
  "keyword": "Given "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_is_displayed_with_the_stock_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in",
  "keyword": "When "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the items to purchase",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_selects_the_items_to_purchase()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the quantities",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_enters_the_quantities()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selected items and quantities are validated",
  "keyword": "Then "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.selected_items_and_quantities_are_validated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is asked to either confirm purchase or select more items",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_is_asked_to_either_confirm_purchase_or_select_more_items()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Retail Store Portal purchase",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@purchase"
    }
  ]
});
formatter.step({
  "name": "User is displayed with the stock present",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs in",
  "keyword": "When "
});
formatter.step({
  "name": "user selects the items to purchase as \u003citems\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the quantities as \u003cquantities\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "selected items and quantities are validated",
  "keyword": "Then "
});
formatter.step({
  "name": "user is asked to either confirm purchase or select more items",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "items",
        "quantities"
      ]
    },
    {
      "cells": [
        "Empathy-Do",
        "4"
      ]
    },
    {
      "cells": [
        "The Finisher",
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Retail Store Portal purchase",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@purchase"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is displayed with the stock present",
  "keyword": "Given "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_is_displayed_with_the_stock_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in",
  "keyword": "When "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the items to purchase as Empathy-Do",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_selects_the_items_to_purchase_as_Empathy_Do()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the quantities as 4",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_enters_the_quantities_as(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selected items and quantities are validated",
  "keyword": "Then "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.selected_items_and_quantities_are_validated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is asked to either confirm purchase or select more items",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_is_asked_to_either_confirm_purchase_or_select_more_items()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Retail Store Portal purchase",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@purchase"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is displayed with the stock present",
  "keyword": "Given "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_is_displayed_with_the_stock_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in",
  "keyword": "When "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_logs_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the items to purchase as The Finisher",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_selects_the_items_to_purchase_as_The_Finisher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the quantities as 2",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_enters_the_quantities_as(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selected items and quantities are validated",
  "keyword": "Then "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.selected_items_and_quantities_are_validated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is asked to either confirm purchase or select more items",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_is_asked_to_either_confirm_purchase_or_select_more_items()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Purchase Confirmation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@confirm"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User confirms purchase",
  "keyword": "Given "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_confirms_purchase()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "finishing with item selection",
  "keyword": "When "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.finishing_with_item_selection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "order details are placed",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.order_details_are_placed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "total amount to be paid is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.total_amount_to_be_paid_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Bill id is also displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.bill_id_is_also_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "purchase is confirmed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.purchase_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "order details and stored in inventory",
  "keyword": "And "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.order_details_and_stored_in_inventory()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Purchase History",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@view"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is displayed the purchase history",
  "keyword": "Given "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.user_is_displayed_the_purchase_history()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecting View Purchases",
  "keyword": "When "
});
formatter.match({
  "location": "com.wiley.stepDefinitions.RetailStoreSteps.selecting_View_Purchases()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});