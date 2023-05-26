import React from 'react';
import { HiOutlineHandThumbUp, HiChevronRight } from "react-icons/hi2";
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';


const ChefCard = ({ chef }) => {
    const { id,chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chef;
    return (

        <LazyLoad>
            <div className=''>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg mx-auto block" src={chef_picture} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{chef_name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Year Of Experience: {years_of_experience} years</p>
                    <div className='flex justify-between items-center my-6'>
                        <p>Numbers of recipes: {number_of_recipes}</p>
                        <p><HiOutlineHandThumbUp className='inline mb-1.5' /> {likes}</p>
                    </div>
                    <button className='w-full text-center text-white font-semibold px-6 py-3 bg-[#ff4a51] hover:bg-[#f05c70] duration-200 ease-in-out cursor-pointer'>
                        <Link to={`/chefdetails/${id}`}>View Recipes <HiChevronRight className='inline mb-0.5' /></Link>
                    </button>
                </div>
            </div>
        </div>
        </LazyLoad>

    );
};

export default ChefCard;