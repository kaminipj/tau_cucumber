import {When} from "cucumber"
import clickButton from "../../support/actions/clickButton"
import setValue from "../../support/actions/setValue"

When("user clicks on sign in",()=>{

    $("*=Sign").click()
    //clickButton($("*=Sign"))
})

When("user enters valid email",()=>{
   // $("#email_create").setValue("qazwsx123@rfvg3.com")
   setValue($("#email_create"),"qazwsx123@rfvg007.com")
}) 

When ("user clicks on create account",()=>{
   // $("#SubmitCreate").click()
   clickButton($("#SubmitCreate"))

})


When ("user enters all the fields",()=>{
   // $("#SubmitCreate").click()
   $("#customer_firstname").setValue("qaz")
   $("#customer_lastname").setValue("wsx")
   $("#passwd").setValue("goog@qaz")
   $("#address1").setValue("collins street")
   $("#city").setValue("Melbourne")
   //const state= $("#id_state")
   //state.selectByIndex("1")
   $("#id_state").selectByIndex("1")
   //$("#id_state").setValue("Alaska")
   $('#postcode').setValue("30000")
   $("#phone_mobile").setValue("12345678")
   $("#alias").setValue("alias")
   $("#submitAccount").click()
})