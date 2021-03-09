package test;



import java.util.concurrent.TimeUnit;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.junit.Cucumber;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

@RunWith(Cucumber.class)
public class Swiggy_login {
	
	WebDriver driver;
	
	@Before
	public void setup() {
		System.setProperty("webdriver.chromedriver", "chromedriver.exe");
		driver = new ChromeDriver();
		
	}
	@After
	public void teardown() {
		
		//driver.quit();
		
	}
    @Given("^user has opened swiggy website on chrome browser$")
    public void user_has_opened_swiggy_website_on_chrome_browser() throws Throwable {
       
    	driver.get("https://www.swiggy.com/");
    	driver.manage().window().maximize();
    	driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
    }

    
    @When("^User enters correct \"([^\"]*)\"$")
    public void user_enters_correct_something(String phonenumber) throws Throwable {
    	WebElement Link_login = driver.findElement(By.xpath("//*[text()='Login']"));
    	Link_login.click();
    	
    	WebElement Phn_no = driver.findElement(By.xpath("//input[@id='mobile']"));
    	Phn_no.sendKeys(phonenumber);
    	Thread.sleep(5000);
    	
    	WebElement Login_btn = driver.findElement(By.className("a-ayg"));
    	Login_btn.submit();
    	//Login_btn.click();
    }
   @Then("^user should be able to login successfully$")
    public void user_should_be_able_to_login_successfully() throws Throwable {
       
    }

}