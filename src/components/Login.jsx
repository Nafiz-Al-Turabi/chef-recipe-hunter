import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ImGithub, ImGoogle, ImHome } from "react-icons/im";
import { HiChevronRight, HiExclamationCircle } from "react-icons/hi";
import { AuthContext } from '../AuthProvider/AuthProvider';


const Login = () => {
    const { loginUser, loginWithGoogle, logInWithGithub } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate=useNavigate();
    const location=useLocation();

    const from =location.state?.from?.pathname || '/'


    const handleLogin = event => {
        event.preventDefault()
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(res => {
                const loggedInUser = res.user
                setSuccess('Login successful');
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => {
                setError(
                    <div className="text-center">
                        <HiExclamationCircle className="inline mb-[4px] text-2xl" />
                        <span>Invalid email or password. Please try again.</span>
                    </div>
                )
            })
    }
    //Google Login 
    const googleSignInHandler = () => {
        loginWithGoogle()
            .then(res => {
                const googleUser = res.user
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error);
            })
    }
    //github login
    const githubSignInHandler = () => {
        logInWithGithub()
            .then(res => {
                const gitUser = res.user
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <div className='text-center bg-[#ff4a51] py-20'>
                <h1 className='text-5xl text-white font-bold mb-6'>Login page</h1>
                <p><Link className='text-lg text-white hover:text-slate-600 duration-200 ease-in-out active:-translate-y-1 text-center ' to='/'><ImHome className='inline mb-1.5' /> Home</Link> <HiChevronRight className='inline mb-0.5' /> <span className='text-slate-500'>Login page</span> </p>
            </div>
            
            <form onSubmit={handleLogin} className='w-[70%] mx-auto bg-slate-100 p-8 mb-2 mt-20'>
                <p className='text-green-700 font-bold text-center mt-3'>{success}</p>
                <p className='text-red-700 text-center mt-3'>{error}</p>
                <h1 className='text-3xl text-center md:text-left font-semibold my-5 '>Login Form</h1>

                <hr className='border-2 border-[#ff4a51] w-[20%] translate-y-0.5' /><hr className='mb-8  border-1 border-slate-400' />
                <div className='grid md:grid-cols-2 text-center md:text-left gap-6'>
                    <div className=''>
                        <label className='text-2xl font-semibold text-slate-500'>Email</label> <br />
                        <input className='md:w-[500px] h-12 my-3 border-none' type="email" name="email" id="email" placeholder='Your email' required /><br />
                    </div>
                    <div>
                        <label className='text-2xl font-semibold text-slate-500'>Password</label><br />
                        <input className='md:w-[500px] h-12 my-3 border-none ' type="password" name="password" id="password" placeholder='Type your password' required /><br />
                    </div>
                </div>

                <div className='mb-8'>
                    <Link className='text-lg text-[#ff4a51]'>Forget Password?</Link>
                </div>

                <button type='submit' className='w-full md:w-24 text-white font-semibold px-6 py-3 mb-6 bg-[#ff4a51] hover:bg-[#ff3a53] duration-200 ease-in-out'>Login</button>
                <Link to='/register' className='w-full md:w-52 mt-3 bg-slate-800 text-white font-semibold md:ml-3 px-6 py-3 hover:bg-[#ff4a51] ease-out duration-300'>Create an Account<HiChevronRight className='inline mb-0.5' /></Link >
            </form>
            <div className='text-center mb-10'>
                <h1 className='my-2 text-slate-500'>Or</h1>
                <button onClick={googleSignInHandler}><ImGoogle className='text-4xl text-yellow-400' /></button>
                <button onClick={githubSignInHandler}><ImGithub className='text-4xl ml-3' /></button>
            </div>
        </>
    );
};

export default Login;