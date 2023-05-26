import React from 'react';
import { Link } from 'react-router-dom';
import { ImHome } from "react-icons/im";
import { HiChevronRight } from "react-icons/hi";


const Blog = () => {
    return (
        <div>
            <div className='text-center bg-[#ff4a51] py-20'>
                <h1 className='text-5xl text-white font-bold mb-6'>Blog page</h1>
                <p><Link className='text-lg text-white hover:text-slate-600 duration-200 ease-in-out active:-translate-y-1 text-center ' to='/'><ImHome className='inline mb-1.5' /> Home</Link> <HiChevronRight className='inline mb-0.5' /> <span className='text-slate-500'>Blog page</span> </p>
            </div>  
            <div className='text-center mt-6'>
                <button className='bg-[#ff4a51] text-white font-semibold text-lg md:text-2xl px-6 py-3 hover:bg-[#f76b70] duration-300 ease-in-out active:scale-95'>Download PDF</button>
            </div>
            <div className='w-[82%] mx-auto my-6 md:my-16'>
                <div className='mb-8'>
                    <h1 className='text-2xl font-semibold mb-6'>1. Differences between uncontrolled and controlled components.?</h1>
                    <p className='text-slate-500 text-justify'>Uncontrolled components manage their own state while controlled components have their state managed by their parent component. React Router can use both uncontrolled and controlled components for rendering routes.</p>
                </div>
                <div className='mb-8'>
                    <h1 className='text-2xl font-semibold mb-6'>2. How to validate React props using PropTypes?</h1>
                    <p className='text-slate-500 text-justify'>PropTypes is a utility library in React that can be used to validate the props passed to a component. To use PropTypes, you first import it, then define the expected props for your component by adding a propTypes object as a static property to your component. In the propTypes object, you can specify the expected type and whether the prop is required or not.</p>
                </div>
                <div className='mb-8'>
                    <h1 className='text-2xl font-semibold mb-6'>3. Difference between nodejs and express js</h1>
                    <p className='text-slate-500 text-justify'>Node.js is a runtime environment that allows you to run JavaScript on the server-side, while Express.js is a web framework that provides a set of features for building web applications and APIs on top of Node.js.</p>
                </div>
                <div className='mb-8'>
                    <h1 className='text-2xl font-semibold mb-6'>4. What is a custom hook, and why will you create a custom hook??</h1>
                    <p className='text-slate-500 text-justify'>A custom hook is a reusable JavaScript function that uses React's hooks to encapsulate and reuse logic throughout your application. Custom hooks are useful for avoiding repetition of similar logic across multiple components and for sharing stateful logic between unrelated components.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;