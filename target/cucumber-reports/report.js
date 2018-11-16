$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Ansal/eclipse-workspace/cucumber/Features/weather.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Weather API",
  "description": "",
  "id": "validate-weather-api",
  "keyword": "Feature"
});
formatter.before({
  "duration": 761572559,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "EndPoint Configuration",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Endpoint is configured",
  "keyword": "Given "
});
formatter.match({
  "location": "Weather.endpoint_is_configured()"
});
formatter.result({
  "duration": 366291183,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Enter a valid city",
  "description": "",
  "id": "validate-weather-api;enter-a-valid-city",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "The City is \"Delhi\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The response code is \u0027201\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Fetch the Value of \"WeatherDescription\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The Server is \"nginx/1.14.0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "content-type is \"JSON\" format",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the name is \"Delhi\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the data should be as",
  "rows": [
    {
      "cells": [
        "Data",
        "Value"
      ],
      "line": 15
    },
    {
      "cells": [
        "City",
        "Delhi"
      ],
      "line": 16
    },
    {
      "cells": [
        "WindDirectionDegree",
        "54.50 Degree"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi",
      "offset": 13
    }
  ],
  "location": "Weather.the_city_is(String)"
});
formatter.result({
  "duration": 4411508585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 22
    }
  ],
  "location": "Weather.the_response_code_is(Integer)"
});
formatter.result({
  "duration": 67952046,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e doesn\u0027t match actual status code \u003c200\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:120)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat services.Weather.the_response_code_is(Weather.java:48)\r\n\tat ✽.Then The response code is \u0027201\u0027(C:/Users/Ansal/eclipse-workspace/cucumber/Features/weather.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "WeatherDescription",
      "offset": 20
    }
  ],
  "location": "Weather.fetch_the_value_of(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "nginx/1.14.0",
      "offset": 15
    }
  ],
  "location": "Weather.the_server_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "JSON",
      "offset": 17
    }
  ],
  "location": "Weather.content_type_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi",
      "offset": 13
    }
  ],
  "location": "Weather.the_name_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Weather.the_data_shoud_be(DataTable)"
});
formatter.result({
  "status": "skipped"
});
});