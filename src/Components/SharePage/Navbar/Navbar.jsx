import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navList = <>

        <Link className='px-5' to='/'>Home</Link>
        <Link className='px-5' to='/service'>Services</Link>
        <Link className='px-5' to='/blog'>Blogs</Link>
        <Link className='px-5' to='/about'>About Us</Link>
        <Link className='px-5' to='/contact'>Contact</Link>
        <Link className='px-5' to='/admin'>Admin</Link>
        <Link className='px-5' to='/login'>Login</Link>

    </>
    return (
        <div className='sticky top-0'>
            {/* <div className="navbar bg-white text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">PrimeX IT</Link>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className='text-2xl py-3 font-mono'>
                            {navList}
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn btn-accent m-5 text-white font-bold" to='/admin'>ADMIN</Link>

                </div>
            </div> */}

            <div className="drawer ">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className=" w-24 text-lg bg-slate-700 btn btn-outline btn-warning drawer-button">MENU</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-40 min-h-full bg-base-100 text-white text-lg font-semibold">
                        {/* Sidebar content here */}
                        <li>{navList}</li>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;