package cucumberJunitSuite;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"C:\\Users\\Ansal\\eclipse-workspace\\cucumber\\Features\\weather.feature"},
		glue = {"services"},
		plugin = {"pretty", "html:target/cucumber-reports","junit:target/cucumber-reports/Cucumber.xml", "json:target/Cucumber.json"},
		monochrome = true

		
		)



public class JunitSuite {

	

	

}
