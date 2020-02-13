@gmail @smoke
Feature: Gmail registration with wrong credential
  Scenario: user must complite registration
    Given user is on the gmail.com page
    Then user should enter email or phone and click next btn
    Then user should enter password and click next button
    And  user should see sighn "Couldn't sign you in"

