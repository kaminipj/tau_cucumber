import {When} from "cucumber"
import clickButton from "../../support/actions/clickButton"
import setValue from "../../support/actions/setValue"

When("user clicks on sign in",()=>{

    //$("*=Sign").click()
    clickButton($("*=Sign"))
})

When("user enters valid email",()=>{
   // $("#email_create").setValue("qazwsx123@rfvg3.com")
   setValue($("#email_create"),"qazwsx123@rfvg4.com")
}) 

When ("user clicks on create account",()=>{
   // $("#SubmitCreate").click()
   clickButton($("#SubmitCreate"))

})