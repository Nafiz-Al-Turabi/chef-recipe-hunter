import React, { useState } from 'react';
import { HiHeart, HiStar } from "react-icons/hi2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DetailsRecipeCard = ({recipe}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        toast.success('Add to favourite');
    };
    

    const buttonStyle = isClicked ? { backgroundColor: 'lightgreen' } : {};
    

    return (
        <>
            {/* card ----- 1 */}
            <div className='bg-[#ff4a51] p-6 mx-4'>
                <h1 className='text-3xl font-bold text-white mb-3'>{recipe.recipe_name}</h1>
                <p className='text-white mb-3 text-justify'> <span className='text-xl font-semibold'>ingredients:</span> {recipe.ingredients}</p>
                <p className='text-white text-justify'> <span className='text-xl font-semibold' >cooking method:</span> {recipe.cooking_method}</p>

                <div className='flex justify-between items-center mt-6'>
                    <p className='text-xl text-white bg-yellow-300 p-1 rounded-sm '>{recipe.rating}<HiStar className='inline mb-1' /></p>
                    <div>
                        <ToastContainer position="top-center" />
                        <button className='text-3xl text-white bg-yellow-300 p-1 rounded-sm'
                            onClick={handleClick}
                            disabled={isClicked}
                            style={buttonStyle}
                        >
                            <HiHeart />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsRecipeCard;