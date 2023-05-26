import React from 'react';
import { HiOutlineClock } from "react-icons/hi2";


const LatestRecipes = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-4'>Latest Recipes</h1>
            <hr className='border-2 border-[#ff4a51] w-20 translate-y-0.5' /> <hr />
             {/* Latest Card-1  ---------- */}
            <div className='mt-6'>
                <div className='mb-4'>
                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://i.ibb.co/K67bgqc/food-Latest-1.jpg" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <p className='text-xl text-[#ff4a51]'>Fast food</p>
                            <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Nashville-Style Hot Chicken burger</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">< HiOutlineClock className='inline mb-1 text-[#ff4a51]' /> May 10, 2023</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='mt-6'>
                <div className='mb-4'>
                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://i.ibb.co/ZxKsVj9/banner2-1.jpg" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <p className='text-xl text-[#ff4a51]'>Fast food</p>
                            <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Kale Quinoa and Avocado Salad with Lemon Dijon vuna</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">< HiOutlineClock className='inline mb-1 text-[#ff4a51]' /> May 10, 2023</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='mt-6'>
                <div className='mb-4'>
                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://i.ibb.co/YBx2W0z/ranna-3-1.jpg" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <p className='text-xl text-[#ff4a51]'>Fast food</p>
                            <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Hot Chicken pizza</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">< HiOutlineClock className='inline mb-1 text-[#ff4a51]' /> May 10, 2023</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className='bg-slate-200 rounded-lg p-6 mt-6 md:mt-28 mb-6 shadow-lg'>
                <h1 className='text-center text-2xl font-semibold mb-4'>Get Latest Updates</h1>
                <hr className=' border-slate-400'/>
                <p className='text-center text-slate-500 my-6 '> <small>Newsletter Subscribe</small> </p>
                <input className='border-none w-full h-12 rounded-lg text-center mb-4' type="email" name="email" id="email" placeholder='Your E-mail address' />
                <button className='w-full h-12 text-center text-white text-xl uppercase tracking-widest bg-[#ff4a51] rounded'>Subscribe</button>
            </div>
        </div>
    );
};

export default LatestRecipes;