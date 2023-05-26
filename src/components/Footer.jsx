import React from 'react';
import { ImYoutube } from 'react-icons/im';
import { ImInstagram } from 'react-icons/im';
import { ImFacebook2, ImTwitter } from "react-icons/im";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-slate-800 py-16'>
            <img src="https://i.ibb.co/n8Q70vB/logo-light.png" className='mx-auto my-auto' alt="" />
            <div className='grid md:grid-cols-3 mx-4 gap-6 mt-6'>
                <div>
                    <h1 className='text-3xl text-white font-semibold mb-6 '>About Ranna</h1>
                    <p className='text-slate-400 text-justify'>Ranna Recipe website is a platform that provides a comprehensive collection of recipes for food enthusiasts. It is a place where people can find a vast range of recipes from different cultures, cuisines, and regions of the world. The website is designed to be user-friendly and easy to navigate.</p>
                </div>
                <div>
                    <h1 className='text-white text-3xl font-semibold mb-4'>Useful Link</h1>
                    <hr className='border-2 border-[#ff4a51] w-20 translate-y-0.5 ' /><hr lassName=' border-slate-400' />
                    <Link className='block mb-4 mt-6 text-slate-400 font-semibold' to='/blog'>Blog</Link>
                    <Link className='block mb-4 mt-6 text-slate-400 font-semibold' to='/about'>About</Link>
                    <Link className='block mb-4 mt-6 text-slate-400 font-semibold' to='/contactus'>Contact</Link>
                </div>
                <div className=' rounded-lg '>
                    <h1 className='text-white text-3xl font-semibold mb-4'>Newsletter</h1>
                    <hr className='border-2 border-[#ff4a51] w-20 translate-y-0.5 '/><hr className=' border-slate-400' />
                    <p className='text-center text-slate-500 my-6 '> <small>Newsletter Subscribe</small> </p>
                    <input className=' w-full bg-slate-800 h-12 rounded-lg text-center mb-4' type="email" name="email" id="email" placeholder='Your E-mail address' />
                    <button className='w-full h-12 text-center text-white text-xl uppercase tracking-widest bg-[#ff4a51] rounded hover:bg-[#651e20] duration-500 active:scale-95 ease-in-out'>Subscribe</button>
                </div>
            </div>
            <p className='text-center text-slate-500 mt-20'>© 2023 Ranna. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;