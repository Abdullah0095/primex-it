import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div className='min-h-screen bg-rose-950'>
            <div className='text-3xl py-4 text-center font-bold text-slate-400'>
                <Link to='/'>PrimeX</Link> ..... A Digital Marketing Consult Agency
            </div>

            <div className='grid md:grid-cols-8 mx-8 gap-3'>

                <div className='mx-24 md:col-span-2 md:mx-4 md:py-32'>
                    <div className='bg-rose-900 text-black w-48 p-2 m-4 text-center rounded-full text-xl font-semibold font-serif'><Link to='/admin'>ADD SERVICE</Link></div>
                    <div className='bg-rose-900 text-black w-48 p-2 m-4 text-center rounded-full text-xl font-semibold font-serif'><Link to='/admin/addblog'>ADD BLOG</Link></div>
                    <div className='bg-rose-900 text-black w-48 p-2 m-4 text-center rounded-full text-xl font-semibold font-serif'><Link to='/admin/servicelist'>SERVICE LIST</Link></div>
                    <div className='bg-rose-900 text-black w-48 p-2 m-4 text-center rounded-full text-xl font-semibold font-serif'><Link to='/admin/bloglist'>BLOG LIST</Link></div>
                </div>

                <div className="md:col-span-6 border-2  border-white">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Admin;