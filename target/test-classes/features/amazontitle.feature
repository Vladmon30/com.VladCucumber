@amazon  # if u want to run all scenarios
Feature: Amazon Title

  # @amazon  # if u want to run only this scenario
  Scenario: Amazon Title verification
    When user goes to Amazon application
    Then user should see Amazon Title

# if u want to run all scenarios
# put annotation in here
  Scenario: Amazon url verification
    When user goes to Amazon application
    Then user should validate Amazon url