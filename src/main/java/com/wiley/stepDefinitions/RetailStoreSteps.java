package com.wiley.stepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class RetailStoreSteps {
	
	@Before
	public void beforeEachScenario() {
		System.out.println("---------------------------------------New Scenario-----------------------------------");
	}
	
	@After
	public void afterEachScenario() {
		System.out.println("--------------------------------------End of scenario----------------------------------");
	}

	@Given("User enters log in portal")
	public void user_enters_log_in_portal() {
	    System.out.println("User enters log in portal");
	}

	@When("user enters the portal link")
	public void user_enters_the_portal_link() {
	    System.out.println("When user clicks portal link");
	}

	@When("enters the email as {string}")
	public void enters_the_email_as(String email) {
	    System.out.println("User enters email as " + email);
	}

	@When("enters password as {int}")
	public void enters_password_as(Integer password) {
	    System.out.println("User enters password as " + password);
	}

	@Then("credentials are verified")
	public void credentials_are_verified() {
	    System.out.println("User credentials are verified");
	}

	@Then("user is redirected to the main page")
	public void user_is_redirected_to_the_main_page() {
	    System.out.println("User is redirected to main page");
	}


	@When("user logs in")
	public void user_logs_in() {
	    System.out.println("When user logs in");
	}

	@When("user selects the items to purchase")
	public void user_selects_the_items_to_purchase() {
	   System.out.println("User selects items to purchase");
	}

	@When("user enters the quantities")
	public void user_enters_the_quantities() {
	    System.out.println("User enters quantities to purchase");
	}

	@When("user selects the items to purchase as Empathy-Do")
	public void user_selects_the_items_to_purchase_as_Empathy_Do() {
	    System.out.println("User selects the item to purchase as Empathy-DO");
	}

	@When("user enters the quantities as {int}")
	public void user_enters_the_quantities_as(Integer quantity) {
	    System.out.println("User enters quantity as " + quantity);
	}

	@Then("selected items and quantities are validated")
	public void selected_items_and_quantities_are_validated() {
	    System.out.println("selected items and quantities are validated");
	}

	@Then("user is asked to either confirm purchase or select more items")
	public void user_is_asked_to_either_confirm_purchase_or_select_more_items() {
	    System.out.println("User is asked to either confirm purchase or select more items");
	}

	@Given("User is displayed with the stock present")
	public void user_is_displayed_with_the_stock_present() {
	    System.out.println("User is displayed with the stock present");
	}

	@When("user selects the items to purchase as The Finisher")
	public void user_selects_the_items_to_purchase_as_The_Finisher() {
	    System.out.println("User selects the items to purchase as The Finisher");
	}


	@Given("User confirms purchase")
	public void user_confirms_purchase() {
	    System.out.println("User confirms purchase");
	}

	@When("finishing with item selection")
	public void finishing_with_item_selection() {
	    System.out.println("When finishing with item selection");
	}

	@When("order details are placed")
	public void order_details_are_placed() {
	    System.out.println("Order is placed");
	}

	@When("total amount to be paid is displayed")
	public void total_amount_to_be_paid_is_displayed() {
	    System.out.println("Total amount to be paid is displayed");
	}

	@When("Bill id is also displayed")
	public void bill_id_is_also_displayed() {
	    System.out.println("Bill id is also displayed");
	}

	@Then("purchase is confirmed")
	public void purchase_is_confirmed() {
	    System.out.println("Purchase is confirmed");
	}

	@Then("order details and stored in inventory")
	public void order_details_and_stored_in_inventory() {
	    System.out.println("Order details and stored in inventory");
	}

	@Given("User is displayed the purchase history")
	public void user_is_displayed_the_purchase_history() {
	    System.out.println("User is displayed the purchase history");
	}

	@When("selecting View Purchases")
	public void selecting_View_Purchases() {
	    System.out.println("When selecting View Purchases");
	}



}
