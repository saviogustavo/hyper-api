Feature: Api

Scenario: Check response status code
    Given I visit the api 
    Then I see the response code and status
    Then I access some of the API fields and check if the data is reliable
    