import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import styles from '../../index.css';

// Define `name` outside the component
let name = "";

const Nav = ({ onScrollAboutUs, onScrollContact }) => {
    const [menuIcon, setMenuIcon] = useState(faBars);
    const [menuVisible, setMenuVisible] = useState(false);
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState("");
    const [meals, setMeals] = useState([]);
    const [nameState, setNameState] = useState("");
    const navigate = useNavigate();

    const onToggleMenu = () => {
        setMenuIcon(menuVisible ? faBars : faX);
        setMenuVisible(!menuVisible);
    };

    useEffect(() => {
        const searching = async () => {
            const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const m = await response.json();

                if (search === "") {
                    setMeals([]);
                } else {
                    setMeals(m.meals);
                }
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        searching();
    }, [count, search]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {
                if (res.data.valid){
                    setNameState(res.data.username);
                    name = res.data.username;
                }
            })
            .catch(err => console.log(err));
    }, []);

    const HandleSearch = (value) => {
        setSearch(value);
        setCount(count + 1);
    };

    const handleLeaveInput = () => {
        setSearch("");
    };
    const handleRecipesLink=() =>{
        navigate("/Recipes");
    }
    const handleLogoClick=() =>{
        navigate("/");
    }

    return (
        <nav className={`h-20 bg-white no-underline flex items-center ${menuVisible ? 'border-b-0' : ' '}  relative border-b-2`}>
            <div><a onClick={handleLogoClick}><label className="font-extrabold w-full text-left text-4xl text-[#E1611F] pl-4 md:pl-8 cursor-pointer z-50">FlavZ</label></a></div>
            <div id="navLinks" className={`absolute md:ml-[25vw]  mr-[12vw] md:static ${menuVisible ? 'absolute' : 'hidden'} md:flex min-h-full  top-0 right-0 bottom-0 left-0 md:h-20 z-10 md:z-0  w-fit   `}>
                <ul className="flex md:flex-row flex-col md:items-center text-center w-[100vw] h-[100vh] md:h-full   bg-white z-50 md:z-0 text-[#373743]  gap-8 md:gap-[4vw] mt-[20%] pt-[12vh] md:pt-[0%] md:w-fit   md:mt-0 cursor-pointer">
                    <li className="hover:underline hover:text-[#656C7B]"><a onClick={handleRecipesLink}>Recipes</a></li>
                    <li className="hover:underline hover:text-[#656C7B]"><a onClick={onScrollAboutUs}>About Us</a></li>
                    <li className="hover:underline hover:text-[#656C7B]"><a onClick={onScrollContact}>Contact</a></li>
                </ul>
            </div>
            <ul className={`flex items-center  md:gap-[3vw]   ${menuVisible ? 'bg-white md:flex  absolute md:static z-20 gap-[4vw]  justify-center top-[110%]  left-[15vw]' : ' hidden md:flex'} `}>
                <li className="text-[#E1611F] font-sans">
                    <div className=" alternative  align-middle  flex mr-2 ">
                        <div className="rounded-lg flex flex-col ">
                            <div className="flex ">
                                <div className="flex w-10 items-center justify-center  border-r border-gray-200 bg-gray-200 p-5">
                                    <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                                        <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                    </svg>
                                </div>
                                <input type="text" className="md:w-[200px] md:max-w-[250px] w-[45vw] max-w-[250px]   bg-gray-200 pl-2 text-base font-semibold outline-0" onChange={(e) => HandleSearch(e.target.value)} onBlur={handleLeaveInput} />

                            </div>
                            <div className={`flex flex-col overflow-scroll no-scrollbar z-50 absolute md:mt-19 md:mt-14  mt-8 h-[20vh] md:h-[40vh] ${styles.mealsContainer}`}>
                                {meals && meals.length > 0 && (
                                    meals.map((meal, index) => (
                                        <Link to={`http://localhost:3000/Recipe/${meal.idMeal}`} key={meal.idMeal}>
                                            <div className={` border-2 bg-white rounded w-[240px] cursor-pointer flex flex-row max-w-[270px] text-center z-50  ${styles.mealItem}`} style={{ top: `${index * 60}px` }}>
                                                <img src={meal.strMealThumb} className="h-12 w-10" alt={meal.strMeal} />
                                                <span className="text-2xl font-semibold truncate pt-2 pl-2">{meal.strMeal}</span>
                                            </div>
                                        </Link>
                                    ))
                                )}

                            </div>


                        </div>
                    </div>
                </li>
                <li className="text-[#E1611F]"><a href="#"><FontAwesomeIcon icon={faBagShopping} /></a></li>
                <li className="text-[#E1611F]"><a href="http://localhost:3000/Login"><FontAwesomeIcon icon={faUser} /></a></li>
            </ul>


            <div className="absolute right-5 z-20">
                <label className="text-[#E1611F] list-none mr-4 cursor-pointer text-3xl md:hidden ">
                    <button onClick={onToggleMenu}><FontAwesomeIcon icon={menuIcon} /></button>
                </label>
            </div>
        </nav>
    );
};

export { name };
export default Nav;
