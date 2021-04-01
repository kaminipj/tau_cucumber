Feature: Register a new  user
Scenario: New user registered successfully
Given user is on home page
When user clicks on sign in
When user enters valid email
When user clicks on create account
When user enters all the fields
Then user is registered successfully

