import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = React.forwardRef((props, ref) => {
    return (
        <div className="md:h-[20vh] lg:h-[35vh] h-[20%] mt-20 w-[100%] bg-[#E1611F] pt-5 text-white m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left pl-16 rounded" ref={ref}>
            <div className="">
                <p className="font-extrabold  text-4xl">Flavz</p>
                <p className="font-normal text-sm w-[50%] pt-4">
                    Welcome to <span className="text-black">FlavZ</span> the ultimate destination for culinary enthusiasts and home cooks!
                </p>
            </div>
            <div className="">
                <p className="text-xl font-normal">Support</p>
                <div class="pt-4">
                    <p class="py-2">Payment</p>
                    <p class="py-2">Terms of services</p>
                    <p class="py-2">Privacy policy</p>
                    <p class="py-2">About Us</p>
                </div>
            </div>
            <div>
                <p class="pb-4">Get In Touch</p>
                <p class="py-2">rayenkanzariemail@gmail.com</p>
                <p class="py-2">+214 26 871 987</p>
            </div>
            <div>
                <p class="pb-4">Social Media</p>
                <p class="py-2"><FontAwesomeIcon icon={faFacebook} className="text-white mx-2" />
                    <FontAwesomeIcon icon={faYoutube} className="text-white mx-2" />
                    <FontAwesomeIcon icon={faGithub} className="text-white mx-2" />
                    <FontAwesomeIcon icon={faDiscord} className="text-white mx-2" />
                </p>
            </div>
        </div>
    );
});

export default Footer;
