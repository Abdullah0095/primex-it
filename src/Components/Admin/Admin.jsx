import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div className='min-h-screen bg-black'>

            <Link to='/'><h1 className='text-3xl font-bold p-6 hover:animate-pulse hover:text-orange-400'>PrimeX</h1></Link>

            <div className='grid md:grid-cols-8 mx-8 gap-3'>
                <div className='mx-24 md:col-span-2 md:mx-4 md:py-24'>
                    <div className='animate-charcter-admin w-48 p-2 m-4 text-center rounded-full text-xl font-semibold font-serif'><Link to='/myadmin'>ADD SERVICE</Link></div>
                    <div className='animate-charcter-admin w-48 p-2 m-4 text-center rounded-full text-xl font-semibold font-serif'><Link to='/myadmin/addblog'>ADD BLOG</Link></div>
                    <div className='animate-charcter-admin w-48 p-2 m-4 text-center rounded-full text-xl font-semibold font-serif'><Link to='/myadmin/servicelist'>SERVICE LIST</Link></div>
                    <div className='animate-charcter-admin w-48 p-2 m-4 text-center rounded-full text-xl font-semibold font-serif'><Link to='/myadmin/bloglist'>BLOG LIST</Link></div>
                </div>

                <div className="md:col-span-6 border-2  border-white md:h-[500px]">
                    <Outlet></Outlet>
                </div>

            </div>

        </div>
    );
};

export default Admin;