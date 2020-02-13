package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
// thats how cucumber works

@CucumberOptions(

// this plugin just for generate reports of all the test
// we simply create folder cucumber in target folder
// saves our results of tests in cucumber report, and json report
        plugin = {"html:target/cucumber", "json:target/report.json"},

// glue our features(under resources) with our steps folder
        features = "src/test/resources/features",

        glue = "steps",
// to run specific feature we use tags.
// we can run multiple features like tags="@Amazon, @google"
// or just one tags = "@Amazon"

        tags = "@gmail",

// dryRun its tag that avoid execution (dont runn browser) checket if all method generated
        dryRun = false
)
public class Runner {

}
