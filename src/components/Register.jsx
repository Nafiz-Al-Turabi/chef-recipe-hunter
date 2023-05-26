import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImHome } from "react-icons/im";
import { HiChevronRight } from "react-icons/hi";
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { HiExclamationCircle,HiCheckCircle } from "react-icons/hi2";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;

        //password validation
        if (password.length < 6) {
            setError(
                <div className="text-center">
                    <HiExclamationCircle className="inline mb-[4px] text-2xl" />
                    <span>Password should be at least 6 characters long</span>
                </div>
            );
            return;
        }

        createUser(email, password)
            .then(res => {
                const registerUser = res.user;
                setSuccess(
                    <div className="text-center">
                        <HiCheckCircle className="inline mb-[4px] text-2xl" />
                        <span>Registration successful <Link className='underline' to='/login'>Go to Login page</Link> </span>
                    </div>
                );
                updateUserData(res.user, name, url)
                event.target.reset();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const updateUserData = (user, name, url) => {
        updateProfile(user, {
            displayName: name,
            photoURL: url
        })
            .then(() => {
                alert('User updated')
            })
            .catch(error => {
                alert(error)
            })
    }
    return (
        <>
            <div className='text-center bg-[#ff4a51] py-20'>
                <h1 className='text-5xl text-white font-bold mb-6'>Register page</h1>
                <p><Link className='text-lg text-white hover:text-slate-600 duration-200 ease-in-out active:-translate-y-1 text-center ' to='/'><ImHome className='inline mb-1.5' /> Home</Link> <HiChevronRight className='inline mb-0.5' /> <span className='text-slate-500'>Register page</span> </p>
            </div>
            <form onSubmit={handleRegister} className='md:w-[70%] mx-auto bg-slate-100 p-8 my-10'>
                <h1 className='text-3xl text-center md:text-left font-semibold my-5 '>Register Form</h1>
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
                        <label className='text-2xl font-semibold text-slate-500'>Password</label><br />
                        <input className='md:w-[500px] h-12 my-3 border-none ' type="password" name="password" id="password" placeholder='Type your password' required /><br />
                    </div>
                    <div>
                        <label className='text-2xl font-semibold text-slate-500'>Photo url</label><br />
                        <input className='md:w-[500px] h-12 my-3 border-none ' type="url" name="url" id="url" placeholder='Url' required /><br />
                    </div>
                </div>

                <div className='mb-8'>
                    <Link className='text-lg text-[#ff4a51]'>Forget Password?</Link>
                </div>

                <input type="submit" value="Register" className='w-full md:w-32 text-white font-semibold px-6 py-3 bg-[#ff4a51] hover:bg-[#ff3a53] duration-200 ease-in-out cursor-pointer' />
                <p className='text-red-700 text-center mt-2'>{error}</p>
                <p className='text-green-700 text-center mt-2'>{success}</p>
            </form>
        </>
    );
};

export default Register;