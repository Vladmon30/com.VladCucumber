package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import utilities.Driver;

public class AmazonTitle_steps {
    @When("user goes to Amazon application")
    public void user_goes_to_Amazon_application() {
        Driver.getDriver().get("http://Amazon.com");
        String tilte = "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more";
        Assert.assertEquals(Driver.getDriver().getTitle(),tilte);
    }

    @Then("user should see Amazon Title")
    public void user_should_see_Amazon_Ttile() {
        Driver.closeDriver();

    }
    @Then("user should validate Amazon url")
    public void user_should_validate_Amazon_url() {
        Assert.assertTrue(Driver.getDriver().getCurrentUrl().contains("amazon.com"));
        Driver.closeDriver();
    }

}
