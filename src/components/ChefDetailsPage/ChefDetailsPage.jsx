import React, { useEffect, useState } from 'react';
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { useParams } from 'react-router-dom';
import DetailsRecipeCard from '../Cards/DetailsRecipeCard';
import LazyLoad from 'react-lazy-load';
import { CirclesWithBar } from 'react-loader-spinner';



const ChefDetailsPage = () => {
    const { id } = useParams()
    const [chef, setChef] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://chef-recipe-hunting-server-nafiz-al-turabi.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                const chef1 = data.find(details => details.id == id)
                if (chef1) {
                    setChef(chef1);
                    setLoading(false);

                }
            })
            .catch(error => {
                console.log(error);
                setLoading(false);

            })
    }, [])

    const { details_picture, chef_name, years_of_experience, number_of_recipes, short_bio, likes } = chef;
    return (
        <>
            <LazyLoad threshold={0.95} onContentVisible={() => { console.log('loaded!') }}>
                <div className='flex flex-col-reverse md:flex-row justify-between items-center bg-[#ff4a51] px-4 pt-8'>
                    <div className='md:w-[60%] bg-[#f1f1f159] px-5 py-5' >
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl text-center md:text-left md:text-6xl font-bold text-white my-5'>{chef_name}</h1>
                            <p className='text-2xl md:text-6xl text-white hover:text-[#000032] duration-500 ease-out active:rotate-12'>{likes} likes </p>
                        </div>
                        <p className='text-xl text-slate-100 mb-5 text-justify'>{short_bio}</p>
                        <p className='text-xl text-center  text-white bg-[#ff4a51] md:w-[200px] p-2 shadow-lg'>Number of recipes: <span className='bg-red-300 px-1 rounded-3xl'>{number_of_recipes}</span></p>
                        <h3 className='text-center text-4xl text-white bg-slate-900 w-[75%] mx-auto py-4 mt-5 translate-y-16 md:translate-y-0 hover:bg-[#1e0202] duration-300 ease-linear'>{years_of_experience} Years of Experience</h3>
                    </div>
                    <div>
                        <img src={details_picture} className='w-96' alt="" />
                    </div>
                </div>
            </LazyLoad>
            {/* recipe card */}
            <div className='my-32 grid md:grid-cols-2 gap-5'>
                { loading ? (
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}>
                            <CirclesWithBar
                                height="100"
                                width="100"
                                color="#ff4a51"
                                ariaLabel='circles-with-bar-loading'
                            />
                        </div>
                    ): 
                chef.recipes && chef.recipes.map(recipe => (
                    <DetailsRecipeCard recipe={recipe} key={recipe.recipe_name} />
                ))}
            </div>
        </>
    );
};

export default ChefDetailsPage;