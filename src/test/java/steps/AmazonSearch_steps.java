package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.AmazonSearch_page;
import utilities.Driver;

public class AmazonSearch_steps {

// in order to use stored WebElement from pages package we must create object of this class
    AmazonSearch_page am = new AmazonSearch_page();

    @Given("User is on the amazon homepage")
    public void user_is_on_the_amazon_homepage() {
        Driver.getDriver().get("http://Amazon.com");
    }

    @When("User enters headphones keyword")
    public void user_enters_headphones_keyword() {
        am.amazonSearchBox.sendKeys("headphones");
    }

    @When("User clicks to amazon search button")
    public void user_clicks_to_amazon_search_button() {
        am.amazonSearchButton.click();
    }

    @Then("User should see headphones in results")
    public void user_should_see_headphones_in_results() {
        String res = am.result.getText();
        System.out.println(res);
        Assert.assertTrue(res.contains("headphones"));
        Driver.closeDriver();
    }

}
