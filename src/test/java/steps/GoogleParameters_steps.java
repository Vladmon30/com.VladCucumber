package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.GoogleParameters_page;
import utilities.Driver;

public class GoogleParameters_steps {

    GoogleParameters_page gPP = new GoogleParameters_page();

    @Given("User is on the homepage of google")
    public void user_is_on_the_homepage_of_google() {
        Driver.getDriver().get("http://google.com");

    }

    @When("User enters {string}")
    public void user_enters(String string) {
        gPP.searchBox.sendKeys(string+ Keys.ENTER);

    }

    @Then("User should see {string} in the title")
    public void user_should_see_in_the_title(String string) {
        String actual = Driver.getDriver().getTitle();
        String expected = string;

        Assert.assertTrue(actual.contains(expected));
        Driver.closeDriver();

    }

}
