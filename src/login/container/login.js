import React from "react";
import Nav from "../../homePage/components/nav";
import LoginComp from "../components/logincomponent.js";
import Footer from '../../homePage/components/footer.js';

function Login () {
    return (
        <div>
            <Nav/>
            <LoginComp/>
            <Footer/>
        </div>
    )
}
export default Login ;