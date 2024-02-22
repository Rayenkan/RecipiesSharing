import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import loginBgUrl from '../imgs/loginbg.webp';
import axios from 'axios'

const LoginComp = () => {
    const [action, setAction] = useState("Login");
    const [UserName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSumbit(event ) {
        event.preventDefault();
        if (action === "Sign Up") {
            axios.post("http://localhost:8081/login", { action ,UserName, email, password })
                .then(res => console.log(res.data))
                .catch(err => console.error(err));
        } else {
            axios.post("http://localhost:8081/login", { UserName, password })
                .then(res => console.log(res.data))
                .catch(err => console.error(err));

        }
    }

    return (
        <div style={{
            backgroundImage: `url(${loginBgUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '99%',
        }} className="my-5 md:mx-2 h-[80vh] md:h-[100vh] rounded flex m-auto justify-center items-center">

            <div className={`container bg-orange-50  h-fit lg:w-[50vw] sm:w-[70vw] w-full rounded flex flex-col m-auto md:mt-auto mt-20 `}>
                <div className="flex flex-col gap-8  items-center md:mt-[8vh] mt-[2vh]">
                    <div className="text text-orange-500 text-4xl font-semibold">{action}</div>
                    <form onSubmit={handleSumbit}>
                        {action === "Sign Up" ? (
                            <div className=" mt-10 flex flex-col gap-5">
                                <div className=" flex bg-white items-center m-auto rounded-md">
                                    <FontAwesomeIcon icon={faUser} className="my-0 mx-3 h-[50px]" />
                                    <input type="text" name="" id="" onChange={e => setUserName(e.target.value)} className="h-[50px] w-[280px] text-gray-800 border-none outline-none size-[19px]" placeholder="UserName" />
                                </div>
                                <div className=" flex items-center bg-white m-auto rounded-md">
                                    <FontAwesomeIcon icon={faEnvelope} className="my-0 mx-3 h-[50px]" />
                                    <input type="email" name="" id="" onChange={e => setEmail(e.target.value)} className="h-[50px] w-[280px] text-gray-800 border-none outline-none size-[19px]" placeholder="Email" />
                                </div>
                                <div className=" flex items-center m-auto bg-white rounded-md">
                                    <FontAwesomeIcon icon={faLock} className="my-0 mx-3 h-[50px]" />
                                    <input type="password" name="" id="" onChange={e => setPassword(e.target.value)} className="h-[50px] w-[280px] text-gray-800 border-none outline-none size-[19px] mb-4" placeholder="Password" />
                                </div>
                            </div>
                        ) : (
                            <div className=" mt-10 flex flex-col gap-5">
                                <div className=" flex bg-white items-center m-auto rounded-md">
                                    <FontAwesomeIcon icon={faUser} className="my-0 mx-3 h-[50px]" />
                                    <input type="text" name="" id="" onChange={e => setUserName(e.target.value)} className="h-[50px] w-[300px] text-gray-800 border-none outline-none size-[19px]" placeholder="UserName" />
                                </div>
                                <div className=" flex items-center m-auto bg-white rounded-md">
                                    <FontAwesomeIcon icon={faLock} className="my-0 mx-3 h-[50px]" />
                                    <input type="password" name="" id="" onChange={e => setPassword(e.target.value)} className="h-[50px] w-[300px] text-gray-800 border-none outline-none size-[19px]" placeholder="Password" />
                                </div>
                                <div className="forget-password justify-end mt-4">
                                    <a href="#"><span>Forgot Password?</span></a>
                                </div>
                            </div>
                        )}
                        <div className="submit-container flex gap-7 mx-auto mb-5">
                            <div className={`my-2 border w-full h-10 cursor-pointer transition-all px-6 py-2 rounded-lg border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] md:max-w-[70%] justify-center flex text-center ${action === "Sign Up" ? "bg-[#E1611F] shadow-orange-100 border-orange-600 text-white" : "bg-gray-300 shadow-gray-100 border-gray-600 text-black"}`}>
                                <button onClick={() => { setAction("Sign Up") }}>Sign</button>
                            </div>
                            <div className={`my-2 border w-full h-10 cursor-pointer transition-all px-6 py-2 rounded-lg border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] md:max-w-[70%] justify-center flex text-center ${action === "Login" ? "bg-[#E1611F] shadow-orange-100 border-orange-600 text-white" : "bg-gray-300 shadow-gray-100 border-gray-600 text-black"}`}>
                                <button onClick={() => { setAction("Login") }}>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginComp;
