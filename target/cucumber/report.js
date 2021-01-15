$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/amazonsearch.feature");
formatter.feature({
  "name": "Amazon search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@amazonSearch"
    }
  ]
});
formatter.scenario({
  "name": "Amazon search test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@amazonSearch"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonSearch_steps.user_is_on_the_amazon_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters headphones keyword",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonSearch_steps.user_enters_headphones_keyword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to amazon search button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonSearch_steps.user_clicks_to_amazon_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see headphones in results",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonSearch_steps.user_should_see_headphones_in_results()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});