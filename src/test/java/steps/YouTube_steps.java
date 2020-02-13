package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.YouTube_page;
import utilities.Driver;
import cucumber.api.PendingException;
import utilities.TestBase;

import java.security.Key;

public class YouTube_steps {

        YouTube_page page = new YouTube_page();

    @Given("user is on the YouTube home page")
    public void user_is_on_the_YouTube_home_page() {
        Driver.getDriver().get("http://Youtube.com");
        System.out.println(Driver.getDriver().getTitle());
        Assert.assertTrue(Driver.getDriver().getTitle().contains("YouTube"));

    }

    @Then("user is able to see search box")
    public void user_is_able_to_see_search_box() {
        Assert.assertTrue(page.searchBox.isEnabled());
    }

    @Then("user is able to see search button")
    public void user_is_able_to_see_search_button() {
        Assert.assertTrue(page.searchBtn.isEnabled());
    }

    @When("user search for FUNNY CAT VIDEO")
    public void user_search_for_FUNNY_CAT_VIDEO() {
        page.searchBox.sendKeys("FUNNY CAT VIDEO"+ Keys.ENTER);
    }

    @When("user should see result related to funny cat video")
    public void user_should_see_result_related_to_funny_cat_video() throws InterruptedException {
        Thread.sleep(3000);
        String titleFunnyCat = Driver.getDriver().getTitle();
        System.out.println(Driver.getDriver().getTitle());
        String expected ="CAT";
        Assert.assertTrue(titleFunnyCat.contains(expected));

        Driver.closeDriver();

    }

}
