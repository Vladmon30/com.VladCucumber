package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class AmazonSearch_page {
    WebDriver driver;

    public AmazonSearch_page() {
        driver = Driver.getDriver();
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//input[@id='twotabsearchtextbox']")
    public WebElement amazonSearchBox;

    @FindBy(xpath = "//input[@type='submit']")
    public WebElement amazonSearchButton;

    @FindBy(xpath ="//span[@class='a-color-state a-text-bold']")
    public WebElement result;


}
