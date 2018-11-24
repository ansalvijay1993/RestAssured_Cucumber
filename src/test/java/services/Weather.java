package services;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.http.Header;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import static com.jayway.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertTrue;
import static org.hamcrest.Matchers.lessThan;
import java.util.List;
public class Weather {
	
	private Response response;
	private RequestSpecification request;
	
	@Before
	public void setup() {
		RestAssured.baseURI="http://restapi.demoqa.com";
		RestAssured.basePath="/utilities/weather/city";
	}
	
	@Given("^Endpoint is configured$")
		public void endpoint_is_configured() throws Exception {
		//Header header = new Header ("Key","Value");
			//request = RestAssured.given().header(header);
			request = RestAssured.given();
		}
		

	@When("^The City is \"([^\"]*)\"$")
		public void the_city_is(String arg1) throws Exception {
	    response = request.when().get("/"+arg1);
	    //System.out.println("1");
		response.then().log().all();
	    
	}
	@Then("^The response code is '(\\d+)'$")
		public void the_response_code_is(Integer Code) {
		//System.out.println("2");
		response.then().statusCode(Code);
	}
	@Then("^content-type is \"([^\"]*)\" format$")
		public void content_type_is(String contentType) {
		if (contentType.equals("JSON")){
			response.then().assertThat().contentType(ContentType.JSON).and().body(matchesJsonSchemaInClasspath("schema-json.json"));
			//System.out.println("3");
		}
	}
	@Then("^the name is \"([^\"]*)\"$")
	public void the_name_is(String City) {
		response.then().assertThat().body("City", equalTo(City));
		/*String code = response.path("WeatherDescription");
		System.out.println(code);*/
		
	}
	@Then ("^Fetch the Value of \"([^\"]*)\"$")
	public void fetch_the_value_of(String Value) {
		String value =  response.path(Value);
		System.out.println(value);
		assertTrue(value.equals("haze"));
	}
	
	@Then("^The Server is \"([^\"]*)\"$")
	public void the_server_is(String Header) {
		String Server = response.getHeader("Server");
		System.out.println(Server);
		response.then().assertThat().header("Server", equalTo(Header));
		response.then().time(lessThan(3500L));
	}
	
	
	
	@Then("^the data should be as$")
	public void the_data_shoud_be(DataTable table) {
		List<List<String>> data = table.raw();
		for (int i = 1; i<data.size(); i++) {
			//System.out.println(data.get(i).get(0));
			//System.out.println(data.get(i).get(1));
			response.then().assertThat().body(data.get(i).get(0), equalTo(data.get(i).get(1)));
		}
		
	};
	

}
