package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import pages.Gmail_page;
import utilities.Config;
import utilities.Driver;


public class Gmail_steps {

    Gmail_page gp = new Gmail_page();

    @Given("user is on the gmail.com page")
    public void user_is_on_the_gmail_com_page() {

        Driver.getDriver().get("http://Gmail.com");

        Assert.assertTrue(Driver.getDriver().getTitle().contains("Gmail"));

    }

    @Then("user should enter email or phone and click next btn")
    public void user_should_enter_email_or_phone_and_click_next_btn() throws InterruptedException {

        gp.email.sendKeys(Config.getProperty("email"));
        gp.next.click();
        Thread.sleep(2000);
    }

    @Then("user should enter password and click next button")
    public void user_should_enter_password_and_click_next_button() {
       Assert.assertTrue(gp.password.isEnabled());

        gp.password.sendKeys(Config.getProperty("password"));
        gp.next.click();
    }

    @Then("user should see sighn {string}")
    public void user_should_see_sighn(String string) {
            Assert.assertTrue(gp.couldntSighnIn.isDisplayed());
    }
}

