import {Then } from "cucumber"
import assert from "assert"

const pageTitle= $('h1=Authentication')

Then("user is landed on authentication page",()=>{
    assert(pageTitle.equals("Authentication"))
})