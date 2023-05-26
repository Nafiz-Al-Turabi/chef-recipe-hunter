import React from 'react';
import { ImHome } from "react-icons/im";
import { HiChevronRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className='text-center bg-[#ff4a51] py-20'>
                <h1 className='text-5xl text-white font-bold mb-6'>About Ranna</h1>
                <p><Link className='text-lg text-white hover:text-slate-600 duration-200 ease-in-out active:-translate-y-1 text-center ' to='/'><ImHome className='inline mb-1.5' /> Home</Link> <HiChevronRight className='inline mb-0.5' /> <span className='text-slate-500'>About</span> </p>
            </div>
            <div className='text-center bg-[#ff4a504e] md:w-[70%] md:mx-auto p-10 my-10 mx-4'>
                <h1 className='text-2xl text-slate-600 font-bold'>About</h1>
                <hr className='border-2 border-[#ff4a51] w-[50%] mx-auto translate-y-0.5' /><hr className='border-1 border-slate-400' />
                <p className='text-slate-600 text-xl text-justify my-8'>Ranna Recipe website is a platform that provides a comprehensive collection of recipes for food enthusiasts. It is a place where people can find a vast range of recipes from different cultures, cuisines, and regions of the world.

                    The website is designed to be user-friendly and easy to navigate. It offers a search bar where users can search for a specific recipe or browse through the categories for inspiration. The categories include breakfast, lunch, dinner, appetizers, desserts, and more.

                    Ranna Recipe website features a wide range of recipes that cater to different dietary requirements, including vegetarian, vegan, gluten-free, and low-carb options. Users can also find recipes for special occasions such as holidays, birthdays, and weddings.

                    In addition to providing recipes, the website also offers cooking tips, ingredient substitutions, and nutritional information. It also allows users to create an account and save their favorite recipes for later use.

                    Ranna Recipe website is constantly updated with new recipes and content, making it a go-to platform for anyone looking for inspiration in the kitchen. Whether you are an experienced cook or a novice, Ranna Recipe website has something for everyone.</p>
            </div>
        </div>
    );
};

export default About;