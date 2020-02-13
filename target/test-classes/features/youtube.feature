
@YouTube
Feature: YouTube search feature
  Scenario: Testing YouTube search
    Given user is on the YouTube home page
    Then  user is able to see search box
    And user is able to see search button
    When user search for FUNNY CAT VIDEO
    And user should see result related to funny cat video
