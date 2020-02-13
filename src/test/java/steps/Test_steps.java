package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class Test_steps {fdsf
    @When("user goes to google application")
    public void user_goes_to_google_application() {
        System.out.println("selenium is going to google.com");
    }

    @Then("user search for apple")
    public void user_search_for_apple() {
        System.out.println("user searching for apple");
    }

    @Then("user should see apple related results")fsf
    public void user_should_see_apple_related_results() {
        1System.out.println("user checking the result");
       // Assert.fail("failing for a reason");
    }

    @Then("user tests something")ffsf
    public void user_tests_something() {
        System.out.println("user doing something");
    }

}
