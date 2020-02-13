package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver;

public class Hooks {
    // Hooks class glue using glue= steps in runner class
    // using for precondition before scenario. For annotation or some precondition
    @Before
    public void setUp(Scenario scenario) {
        System.out.println("This is running before each scenario");
    }

    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            final byte[] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
            // this method takes a screenshoot

            scenario.embed(screenshot,"image/png");
        }
    }
}