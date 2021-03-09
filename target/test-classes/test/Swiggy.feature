Feature: Login into swiggy website
 
  Scenario Outline: Positive scenario to test login functinonality
    Given user has opened swiggy website on chrome browser
    When User enters correct "<Phonenumber>"
    Then user should be able to login successfully

    Examples: 
      | Phonenumber |
      |  7978683811 |
