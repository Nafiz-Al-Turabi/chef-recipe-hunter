import React from 'react';
import {  ImHome } from "react-icons/im";
import { HiChevronRight} from "react-icons/hi";
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div>
            <div className='text-center bg-[#ff4a51] py-20'>
                <h1 className='text-5xl text-white font-bold mb-6'>Contact page</h1>
                <p><Link className='text-lg text-white hover:text-slate-600 duration-200 ease-in-out active:-translate-y-1 text-center ' to='/'><ImHome className='inline mb-1.5' /> Home</Link> <HiChevronRight className='inline mb-0.5' /> <span className='text-slate-500'>Contact</span> </p>
            </div>

            <form className='md:w-[70%] mx-auto bg-slate-100 p-8 my-10'>
                <h1 className='text-3xl text-center md:text-left font-semibold my-5 '>Contact us</h1>
                <hr className='border-2 border-[#ff4a51] w-[20%] translate-y-0.5' /><hr className='mb-8  border-1 border-slate-400' />
                <div className='grid md:grid-cols-2 text-center md:text-left gap-6'>
                    <div className=''>
                        <label className='text-2xl font-semibold text-slate-500'>Name</label> <br />
                        <input className='md:w-[500px] h-12 my-3 border-none' type="text" name="name" id="name" placeholder='Your Name' required /><br />
                    </div>
                    <div>
                        <label className='text-2xl font-semibold text-slate-500'>Email</label><br />
                        <input className='md:w-[500px] h-12 my-3 border-none ' type="email" name="email" id="email" placeholder='Type your email' required /><br />
                    </div>
                    <div>
                        <label className='text-2xl font-semibold text-slate-500'>Message</label><br />
                       <textarea className='md:w-[1010px] mt-3 border-none   ring-offset-slate-500' name="" id="" cols="30" rows="10" placeholder='Your message'></textarea>
                    </div>
                    
                </div>

                <input type="submit" value="Send" className='w-full md:w-32 text-white font-semibold px-6 py-3 mt-3 bg-[#ff4a51] hover:bg-[#ff3a53] duration-200 ease-in-out cursor-pointer' />
                
            </form>
        </div>
    );
};

export default ContactUs;