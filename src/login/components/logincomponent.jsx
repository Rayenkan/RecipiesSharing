import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import loginBgUrl from '../imgs/loginbg.webp';

const LoginComp = () => {
    const [action, setAction] = useState("Sign Up");

    return (
        <div style={{
            backgroundImage: `url(${loginBgUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
            width: '99%',
        }} className="my-5 mx-2 rounded flex justify-center items-center">

            <div className={`container bg-orange-50 h-[80vh] w-[50vw] rounded flex flex-col m-auto`}>
                <div className="header flex flex-col gap-8 items-center mt-[8vh]">
                    <div className="text text-orange-500 text-4xl font-semibold">{action}</div>

                    {action === "Sign Up" ? (
                        <div className="inputs mt-10 flex flex-col gap-5">
                            <div className="input flex bg-white items-center m-auto rounded-md">
                                <FontAwesomeIcon icon={faUser} className="my-0 mx-3 h-[50px]" />
                                <input type="text" name="" id="" className="h-[50px] w-[300px] text-gray-300 border-none outline-none size-[19px]" placeholder="UserName" />
                            </div>
                            <div className="input flex items-center bg-white m-auto rounded-md">
                                <FontAwesomeIcon icon={faEnvelope} className="my-0 mx-3 h-[50px]" />
                                <input type="email" name="" id="" className="h-[50px] w-[300px] text-gray-300 border-none outline-none size-[19px]" placeholder="Email" />
                            </div>
                            <div className="input flex items-center m-auto bg-white rounded-md">
                                <FontAwesomeIcon icon={faLock} className="my-0 mx-3 h-[50px]" />
                                <input type="password" name="" id="" className="h-[50px] w-[300px] text-gray-300 border-none outline-none size-[19px]" placeholder="Password" />
                            </div>
                        </div>
                    ) : (
                        <div className="inputs mt-10 flex flex-col gap-5">
                            <div className="input flex bg-white items-center m-auto rounded-md">
                                <FontAwesomeIcon icon={faUser} className="my-0 mx-3 h-[50px]" />
                                <input type="text" name="" id="" className="h-[50px] w-[300px] text-gray-300 border-none outline-none size-[19px]" placeholder="UserName" />
                            </div>
                            <div className="input flex items-center m-auto bg-white rounded-md">
                                <FontAwesomeIcon icon={faLock} className="my-0 mx-3 h-[50px]" />
                                <input type="password" name="" id="" className="h-[50px] w-[300px] text-gray-300 border-none outline-none size-[19px]" placeholder="Password" />
                            </div>
                            <div className="forget-password justify-end mt-4">
                                <a href=""><span>Forgot Password?</span></a>
                            </div>
                        </div>
                    )}

                    <div className="submit-container flex gap-7 mx-auto mb-5">
                        <div className={` ${action === "Sign Up" ? "bg-[#E1611F] shadow-orange-100 border-orange-600 text-white" : "bg-gray-300 shadow-gray-100 border-gray-600 text-black "} my-2 border w-full h-10 cursor-pointer transition-all px-6 py-2 rounded-lg border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] md:max-w-[70%] justify-center flex text-center`}>
                            <button onClick={() => setAction("Sign Up")}>Sign</button>
                        </div>
                        <div className={` ${action === "Login" ? "bg-[#E1611F] shadow-orange-100 border-orange-600 text-white" : "bg-gray-300 shadow-gray-100 border-gray-600 text-black "} my-2 border w-full h-10 cursor-pointer transition-all px-6 py-2 rounded-lg border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] md:max-w-[70%] justify-center flex text-center`}>
                            <button onClick={() => setAction("Login")}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComp;
