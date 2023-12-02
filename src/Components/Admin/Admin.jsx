import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <div className='text-3xl m-4 text-center font-bold text-slate-400'>
                <Link to='/'>PrimeX</Link> ..... A Digital Marketing Consult Agency
            </div>

            <div className='grid grid-cols-8 mx-8 gap-3'>

                <div className='col-span-2 md:mx-4'>
                    <div className='bg-emerald-300 text-black p-2 m-4 text-center rounded-full text-xl font-semibold font-serif'><Link to='/admin'>ADD SERVICE</Link></div>
                    <div className='bg-emerald-300 text-black p-2 m-4 text-center rounded-full text-xl font-semibold font-serif'><Link to='/admin/addblog'>ADD BLOG</Link></div>
                    <div className='bg-emerald-300 text-black p-2 m-4 text-center rounded-full text-xl font-semibold font-serif'><Link to='/admin/servicelist'>SERVICE LIST</Link></div>
                    <div className='bg-emerald-300 text-black p-2 m-4 text-center rounded-full text-xl font-semibold font-serif'><Link to='/admin/bloglist'>BLOG LIST</Link></div>
                </div>

                <div className="col-span-6 ...  bg-black">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Admin;