$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/gmail.feature");
formatter.feature({
  "name": "Gmail registration with wrong credential",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@gmail"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "user must complite registration",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmail"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the gmail.com page",
  "keyword": "Given "
});
formatter.match({
  "location": "Gmail_steps.user_is_on_the_gmail_com_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter email or phone and click next btn",
  "keyword": "Then "
});
formatter.match({
  "location": "Gmail_steps.user_should_enter_email_or_phone_and_click_next_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter password and click next button",
  "keyword": "Then "
});
formatter.match({
  "location": "Gmail_steps.user_should_enter_password_and_click_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see sighn \"Couldn\u0027t sign you in\"",
  "keyword": "And "
});
formatter.match({
  "location": "Gmail_steps.user_should_see_sighn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/test.feature");
formatter.feature({
  "name": "This is my first Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Google search scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@google"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to google application",
  "keyword": "When "
});
formatter.match({
  "location": "Test_steps.user_goes_to_google_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for apple",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_steps.user_search_for_apple()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see apple related results",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.user_should_see_apple_related_results()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tests something",
  "keyword": "And "
});
formatter.match({
  "location": "Test_steps.user_tests_something()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/youtube.feature");
formatter.feature({
  "name": "YouTube search feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@YouTube"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Testing YouTube search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@YouTube"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the YouTube home page",
  "keyword": "Given "
});
formatter.match({
  "location": "YouTube_steps.user_is_on_the_YouTube_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to see search box",
  "keyword": "Then "
});
formatter.match({
  "location": "YouTube_steps.user_is_able_to_see_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to see search button",
  "keyword": "And "
});
formatter.match({
  "location": "YouTube_steps.user_is_able_to_see_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for FUNNY CAT VIDEO",
  "keyword": "When "
});
formatter.match({
  "location": "YouTube_steps.user_search_for_FUNNY_CAT_VIDEO()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see result related to funny cat video",
  "keyword": "And "
});
formatter.match({
  "location": "YouTube_steps.user_should_see_result_related_to_funny_cat_video()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});