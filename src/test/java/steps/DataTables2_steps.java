package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.DataTables_page;
import utilities.Driver;

public class DataTables2_steps {

    DataTables_page dTP = new DataTables_page();

    @Given("User is on the datatables homepage")
    public void user_is_on_the_datatables_homepage() {
        Driver.getDriver().get("https://editor.datatables.net/");
    }

    @Given("User clicks to New Button")
    public void user_clicks_to_New_Button() {

        dTP.newButton.click();

    }

    @Then("User should see Create New Entry Box")
    public void user_should_see_Create_New_Entry_Box() throws InterruptedException {
        Thread.sleep(500);
        Assert.assertTrue(dTP.newEmployeeForm.isDisplayed());
    }

    @Then("User should enter firstname")
    public void user_should_enter_firstname() {

        dTP.firstNameInput.sendKeys("Vlad");

    }

    @Then("User should enter lastname")
    public void user_should_enter_lastname() {
        dTP.lastNameInput.sendKeys("Mon");
    }

    @Then("User should enter position")
    public void user_should_enter_position() {

        dTP.positionInput.sendKeys("retired assasin");
    }

    @Then("User should enter office")
    public void user_should_enter_office() {

        dTP.officeInput.sendKeys("London");
    }

    @Then("User should enter extension")
    public void user_should_enter_extension() {

        dTP.extensionInput.sendKeys("312");
    }

    @Then("User should enter start date")
    public void user_should_enter_start_date() {
        dTP.startDateInput.sendKeys("2019-01-12");
    }

    @Then("User should enter salary")
    public void user_should_enter_salary() {
        dTP.salaryInput.sendKeys("124000");
    }

    @Then("User should click to create button")
    public void user_should_click_to_create_button() {
        dTP.createButton.click();
    }

    @Then("User enters first name to search box")
    public void user_enters_first_name_to_search_box() {

        dTP.searchBox.sendKeys("Vlad");


    }

    @Then("User should enter firstname {string}")
    public void user_should_enter_firstname(String firstName) {

        dTP.firstNameInput.sendKeys(firstName);

    }

    @Then("User should enter lastname {string}")
    public void user_should_enter_lastname(String lastName) {

        dTP.lastNameInput.sendKeys(lastName);

    }

    @Then("User should enter position {string}")
    public void user_should_enter_position(String position) {

        dTP.positionInput.sendKeys(position);

    }

    @Then("User enters first name {string} to search box")
    public void user_enters_first_name_to_search_box(String firstname) {

        dTP.searchBox.sendKeys(firstname);
    }

    @Then("User should enter office {string}")
    public void user_should_enter_office(String office) {
     dTP.officeInput.sendKeys(office);
    }

    @Then("User should enter extension {string}")
    public void user_should_enter_extension(String extension) {
        dTP.extensionInput.sendKeys(extension);
    }

    @Then("User should enter start date {string}")
    public void user_should_enter_start_date(String date) {
        dTP.startDateInput.sendKeys(date);
    }

    @Then("User should enter salary {string}")
    public void user_should_enter_salary(String salary) {
        dTP.salaryInput.sendKeys(salary);
    }

    @Then("User should see first name {string} is inserted in the table")
    public void user_should_see_first_name_is_inserted_in_the_table(String expectedName) throws InterruptedException {

        String expected = expectedName;
        Thread.sleep(5000);
        String actual = dTP.firstResult.getText();
        System.out.println(actual);
        //Assert.fail();
        Assert.assertTrue("Name was not found!",actual.contains(expected));


        Driver.closeDriver();
    }

}
