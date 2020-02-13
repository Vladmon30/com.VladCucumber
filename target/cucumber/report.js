$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/youtube.feature");
formatter.feature({
  "name": "YouTube search feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@YouTube"
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