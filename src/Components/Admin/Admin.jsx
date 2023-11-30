import React from 'react';
import {  Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <div className='text-center m-10 text-5xl font-bold text-white'>
                <Link to='/'>PRIME..X</Link>
            </div>
            <div className='grid grid-cols-3 gap-4'>

                <div>
                    <div><Link to='/admin'>ADD SERVICE</Link></div>
                    <div><Link to='/admin/addblog'>ADD BLOG</Link></div>
                    <div><Link to='/admin/servicelist'>SERVICE LIST</Link></div>
                    <div><Link to='/admin/bloglist'>BLOG LIST</Link></div>                   
                </div>
                <div>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Admin;