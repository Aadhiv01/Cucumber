package com.wiley.testRunners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:com/wiley/features",
		glue="com/wiley/stepDefinitions",
		plugin = {"pretty:src/com/wiley/cucumberReports/creports.txt",
				"html:src/com/wiley/cucumberReports/htmlreports",
				"usage:src/com/wiley/cucumberReports/cucumber.json",
				"junit:src/com/wiley/cucumberReports/cucumber-results.xml"
				}
		)

public class cucumberTest {

}
