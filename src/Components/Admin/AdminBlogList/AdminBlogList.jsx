import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AdminBlogList = () => {
    const blogLoadedData = useLoaderData();
    
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table text-center text-lg font-bold">
                        {/* head */}
                        <thead>
                            <tr className='text-xl'>
                                <th></th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            blogLoadedData.map((blog, index) => <BlogListDisplay index={index} key={blog._id} blog={blog}></BlogListDisplay>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

const BlogListDisplay = ({ blog, index }) => {
    const { blogTitle } = blog;

    // console.log(index)
    // console.log(blogTitle)
    const handleDelete = (_id) => {
        console.log("deleted id is ", _id);
        window.location.reload();

        fetch(`http://localhost:5000/blog/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("successfully deleted from database")
                }
            })
    }
    return (
        <tbody>
            <tr>
                <th>{index + 1}</th>
                <td className='text-white'>{blogTitle}</td>
                <td><button className="btn btn-warning w-24" onClick={() => handleDelete(blog._id)}>delete</button></td>
            </tr>
        </tbody>

    )
}


export default AdminBlogList;