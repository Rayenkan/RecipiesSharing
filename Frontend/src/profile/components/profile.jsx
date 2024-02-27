import React from "react";
import { useParams } from "react-router-dom";



function Profile() {
    const { id } = useParams();
    return (
        <div class="no-scrollbar overflow-hidden">
            
            <div class="bg-orange-50 w-full border-orange-500 rounded-lg flex flex-row ">
                <div class="h-[80vh] text-center w-full flex flex-col bg-orange-500 text-white">
                    <div className="pfp" class="h-[30%] w-[50%] m-2 border-white rounded-lg ">
                        <img src="" alt="" srcset="" />
                    </div>
                    <div className="details " class="pl-2">
                        <p className="name">name: {}</p>
                        <hr />
                        <table class="text-left ">
                            <tr>
                                <td>age :</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>occupation :</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>lacation :</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>education :</td>
                                <td></td>
                            </tr>
                            
                        </table>
                        <p className="personality">Liked recipies</p>
                        <hr />
                        <div className="personalities">
                            <p defaultValue="-------"></p>
                            <p defaultValue="-------"></p>
                            <p defaultValue="-------"></p>
                            <p defaultValue="-------"></p>
                            <p defaultValue="-------"></p>
                        </div>
                    </div><br /><br />
                    <div className="personality">

                    </div>
                </div>

                <div class="bg-orange-50 text-black">
                    <div className="about me " class=" border-orange-600 "  >
                        <p>

                        </p>
                    </div>
                    <div className="recipies">
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Profile;
