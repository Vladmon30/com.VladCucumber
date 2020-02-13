@amazonSearch
Feature: Amazon search
  #Background: User is on the amazon homepage
  #Given: User on the amazon homepage
  Scenario: Amazon search test
    Given User is on the amazon homepage
    When  User enters headphones keyword
    And   User clicks to amazon search button
    Then  User should see headphones in results