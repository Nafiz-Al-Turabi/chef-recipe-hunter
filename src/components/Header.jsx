import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ImHome } from "react-icons/im";
import { AuthContext } from '../AuthProvider/AuthProvider';
import ActiveLink from './ActiveLink/ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error.message))
    }

    return (
        <div>
            <div className='md:my-5'>
                <img src="https://i.ibb.co/smrmKV3/logo-dark.png" className='mx-auto my-auto' alt="" />
            </div>
            <hr />
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand>
                    <img
                        src="https://i.ibb.co/smrmKV3/logo-dark.png"
                        className="mr-3 h-6 sm:h-9"
                        alt=""
                    />

                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user ? <>
                            <Dropdown
                                arrowIcon={false}
                                inline={true}
                                label={<Avatar alt="User settings" title={user.displayName ? user.displayName : "No name found"} img={user.photoURL} rounded={true} />}
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        {user.displayName}
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        {user.email}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleSignOut}>
                                    Sign out
                                </Dropdown.Item>
                            </Dropdown>
                        </> : <Link to='/login' className='bg-[#ff4a51] text-xl font-semibold text-white px-5 py-2 rounded-lg hover:bg-[#f6656a] duration-300 active:bg-[#9f0106]'>Login</Link>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <ActiveLink  to='/'><ImHome className='inline mb-1.5' /> Home</ActiveLink>
                    <ActiveLink  to='/about'>About</ActiveLink>
                    <ActiveLink  to='/blog'>Blog</ActiveLink>
                    <ActiveLink  to='/contactus'>Contact</ActiveLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;