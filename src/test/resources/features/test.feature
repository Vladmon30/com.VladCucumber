Feature: This is my first Feature
  # You can add some comment using '#'
  @google
  Scenario: Google search scenario
    When user goes to google application
    Then user search for apple
    And  user should see apple related results
    And user tests something
