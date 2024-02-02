import React, { useState } from "react";
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping, faUser, faBars, faX } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const [menuIcon, setMenuIcon] = useState(faBars);
    const [menuVisible, setMenuVisible] = useState(false);

    const onToggleMenu = () => {
        setMenuIcon(menuVisible ? faBars : faX);
        setMenuVisible(!menuVisible);
    };

    return (
        <nav className={`h-20 bg-white no-underline flex items-center ${menuVisible ? 'border-b-0' : ''} relative border-b-2`}>
            <label className="font-extrabold w-full text-left text-4xl text-[#E1611F] pl-8">FlavZ</label>
            <div id="navLinks" className={`absolute  md:static ${menuVisible ? 'block' : 'hidden'} md:flex  min-h-full top-0 right-0 bottom-0 left-0 md:h-20 z-10 md:z-0  w-full items-center   `}>
                <ul className="flex md:flex-row flex-col md:items-center text-center w-[100vw] h-[100vh] md:h-full md:w-full  bg-white z-50 md:z-0 text-[#373743] gap-8 md:gap-[4vw] mt-32 md:mt-0">
                    <li className="hover:underline hover:text-[#656C7B]"><a href="/">Recipies</a></li>
                    <li className="hover:underline hover:text-[#656C7B]"><a href="/">About Us</a></li>
                    <li className="hover:underline hover:text-[#656C7B]"><a href="/">Contact</a></li>
                </ul>
            </div>
            <ul className={`flex items-center gap-[4vw] md:gap-[3vw] px-8 pl-20 md:pl-32 ${menuVisible ? ' z-20 w-fit gap-[4vw] mx-auto justify-center' : ''} `}>
                <li className="text-[#E1611F]"><a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
                <li className="text-[#E1611F]"><a href="#"><FontAwesomeIcon icon={faBagShopping} /></a></li>
                <li className="text-[#E1611F]"><a href="#"><FontAwesomeIcon icon={faUser} /></a></li>
            </ul>

                    
            <div className="relative z-20">
                <label className="text-[#E1611F] list-none mr-4 cursor-pointer text-3xl md:hidden ">
                    <button onClick={onToggleMenu}><FontAwesomeIcon icon={menuIcon} /></button>
                </label>
            </div>
        </nav>
    );
};

export default Nav;
