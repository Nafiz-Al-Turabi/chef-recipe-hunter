import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Carousel } from 'flowbite-react';
import ChefCard from './Cards/ChefCard';
import LatestRecipes from '../LatestRecipes/LatestRecipes';
import { CirclesWithBar } from 'react-loader-spinner';



const Home = () => {
    const [chefs, setChefs] = useState([])
    const user = useContext(AuthContext)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://chef-recipe-hunting-server-nafiz-al-turabi.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error.message);
                setLoading(false);
            })
    }, [])

    return (
        <>
            <div className='grid md:grid-cols-2'>
                <div className='m-2 md:mx-4'>
                    <h1 className='text-3xl md:text-7xl font-bold my-8 uppercase '>Ch<span className='text-[#ff4a51] font-extrabold'>oo</span>se You best recipes</h1>
                    <p className='text-slate-600 text-xl text-justify'>The website is designed to be user-friendly and easy to navigate. It offers a search bar where users can search for a specific recipe or browse through the categories for inspiration.</p>

                </div>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-80 m-2 md:mx-4">
                    <Carousel>
                        <div className="flex h-full items-center justify-center bg-slate-100 dark:text-white">
                            <img src="https://i.ibb.co/25YK3DV/banner1.jpg" alt="" />
                        </div>
                        <div className="flex h-full items-center justify-center bg-slate-100 dark:text-white">
                            <img src="https://i.ibb.co/BLB6jjP/banner2.jpg" alt="" />
                        </div>
                        <div className="flex h-full items-center justify-center bg-slate-100 dark:text-white">
                            <img src="https://i.ibb.co/xCj2mP5/banner-3.jpg" alt="" />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className='text-center bg-[#ff4a51] py-20 mt-10'>
                <h1 className='text-5xl text-white font-bold mb-6 uppercase'>Our chefs and Latest recipes</h1>
                <p className='text-xl text-slate-300'>Choose your best option</p>
            </div>

            <div className='grid md:grid-cols-4 gap-5 mx-4 mt-10 '>
                <div className='grid md:grid-cols-3 md:col-span-3 gap-5'>
                    {loading ? (
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
                    ) : (
                        chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    )}
                </div>
                <LatestRecipes></LatestRecipes>
            </div>
        </>
    );
};

export default Home;