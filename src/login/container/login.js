import React from "react";
import Nav from "../../homePage/components/nav";
import LoginComp from "../components/logincomponent.jsx";
import Footer from '../../homePage/components/footer.js';

function Login () {
    return (
        <div class="overflow-hidden no-scrollbar">
            <Nav/>
            <LoginComp/>
            <Footer/>
        </div>
    )
}
export default Login ;