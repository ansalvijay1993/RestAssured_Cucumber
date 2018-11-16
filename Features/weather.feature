Feature: Validate Weather API

  Background: EndPoint Configuration
    Given Endpoint is configured

  @run
  Scenario: Enter a valid city
    When The City is "Delhi"
    Then The response code is '201'
    Then Fetch the Value of "WeatherDescription"
    Then The Server is "nginx/1.14.0" 
    Then content-type is "JSON" format
    Then the name is "Delhi"
    And the data should be as
      | Data                  | Value     |
      | City                  | Delhi     |
      | WindDirectionDegree | 54.50 Degree |
