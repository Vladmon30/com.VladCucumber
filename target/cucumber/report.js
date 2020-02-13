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
formatter.uri("src/test/resources/features/amazontitle.feature");
formatter.feature({
  "name": "Amazon Title",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@amazon"
    },
    {
      "name": "#"
    },
    {
      "name": "if"
    },
    {
      "name": "u"
    },
    {
      "name": "want"
    },
    {
      "name": "to"
    },
    {
      "name": "run"
    },
    {
      "name": "all"
    },
    {
      "name": "scenarios"
    }
  ]
});
formatter.scenario({
  "name": "Amazon Title verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@amazon"
    },
    {
      "name": "#"
    },
    {
      "name": "if"
    },
    {
      "name": "u"
    },
    {
      "name": "want"
    },
    {
      "name": "to"
    },
    {
      "name": "run"
    },
    {
      "name": "all"
    },
    {
      "name": "scenarios"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to Amazon application",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonTitle_steps.user_goes_to_Amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see Amazon Title",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonTitle_steps.user_should_see_Amazon_Ttile()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Amazon url verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@amazon"
    },
    {
      "name": "#"
    },
    {
      "name": "if"
    },
    {
      "name": "u"
    },
    {
      "name": "want"
    },
    {
      "name": "to"
    },
    {
      "name": "run"
    },
    {
      "name": "all"
    },
    {
      "name": "scenarios"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to Amazon application",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonTitle_steps.user_goes_to_Amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should validate Amazon url",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonTitle_steps.user_should_validate_Amazon_url()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/datatables2.feature");
formatter.feature({
  "name": "Testing datatables website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@datatables2"
    }
  ]
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@datatables2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "DataTables2_steps.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTables2_steps.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"Vlad\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"Monchanov\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"Retired\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"London\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"341\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-01-12\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"124000\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTables2_steps.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"Vlad\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"Vlad\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTables2_steps.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/datatables3.feature");
formatter.feature({
  "name": "Testing datatables website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.step({
  "name": "User should enter firstname \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter lastname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter position \"\u003cposition\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter office \"\u003coffice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter extension \"\u003cextension\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter start date \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter salary \"\u003csalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters first name \"\u003cfirstname\u003e\" to search box",
  "keyword": "And "
});
formatter.step({
  "name": "User should see first name \"\u003cfirstname\u003e\" is inserted in the table",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for datatables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "position",
        "office",
        "extension",
        "date",
        "salary"
      ]
    },
    {
      "cells": [
        "john",
        "doe",
        "retired",
        "london",
        "314",
        "2019-12-12",
        "125000"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Testing adding new employee to the table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatables3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "DataTables2_steps.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks to New Button",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_clicks_to_New_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Create New Entry Box",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTables2_steps.user_should_see_Create_New_Entry_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter firstname \"john\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_should_enter_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter lastname \"doe\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_should_enter_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter position \"retired\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_should_enter_position(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter office \"london\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_should_enter_office(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter extension \"314\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_should_enter_extension(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter start date \"2019-12-12\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_should_enter_start_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter salary \"125000\"",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_should_enter_salary(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click to create button",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTables2_steps.user_should_click_to_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters first name \"john\" to search box",
  "keyword": "And "
});
formatter.match({
  "location": "DataTables2_steps.user_enters_first_name_to_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see first name \"john\" is inserted in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTables2_steps.user_should_see_first_name_is_inserted_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/gmail.feature");
formatter.feature({
  "name": "Gmail registration with wrong credential",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@gmail"
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
formatter.uri("src/test/resources/features/googleParameters.feature");
formatter.feature({
  "name": "Google search functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@googleParameters"
    }
  ]
});
formatter.scenario({
  "name": "Testing google search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@googleParameters"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the homepage of google",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleParameters_steps.user_is_on_the_homepage_of_google()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"flowers\"",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleParameters_steps.user_enters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see \"flowers\" in the title",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleParameters_steps.user_should_see_in_the_title(String)"
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
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Google search scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
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