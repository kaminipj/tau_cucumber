import {Then } from "cucumber"



const welcomeText =$('.info-account')

Then("user is registered successfully",()=>{
   expect(welcomeText).toHaveText("Welcome to your account. Here you can manage all of your personal information and orders.")
})