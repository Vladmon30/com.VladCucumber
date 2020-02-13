package pages;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class Gmail_page {
WebDriver driver;


public Gmail_page() {
    driver = Driver.getDriver();
    PageFactory.initElements(driver, this);
}
    @FindBy(xpath = "/html/head/title")
    public WebElement title;

    @FindBy(xpath = "//input[@type='email']")
    public WebElement email;

    @FindBy(xpath = "//span[@class='RveJvd snByac']")
    public WebElement next;

    @FindBy(xpath = "//input[@name='password']")
    public WebElement password;

    @FindBy(xpath = "//span[@class='RveJvd snByac']")
    public WebElement click2;

    @FindBy(xpath = "//*[@id='headingText']/span")
    public WebElement couldntSighnIn;
}
