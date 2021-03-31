import { Given } from "cucumber"
import goToURL from '../../support/actions/goToURL'

Given("user is on home page",()=>{
    goToURL("/")
})