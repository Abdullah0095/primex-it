import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AdminBlogList = () => {
    const blogLoadedData = useLoaderData();
    // console.log(blogLoadedData);

    
    
    return (
        <div>
            <h1>Posted Blog list are here </h1>
            

            <div>
                <div className="overflow-x-auto">
                    <table className="table text-center text-lg font-bold">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            blogLoadedData.map(blog => <BlogListDisplay key={blog._id} blog={blog}></BlogListDisplay>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

const BlogListDisplay = ({ blog }) => {
    const { blogTitle } = blog;
    // console.log(blogTitle)
    
    const handleDelete = _id => {
        console.log(`delete the id ${_id}`)
    }

    return (

        <tbody>
            
            <tr>
                <th>1</th>
                <td>{blogTitle}</td>
                <td><button className="btn btn-warning" onClick={() => handleDelete(blog._id)}>delete</button></td>

            </tr>

        </tbody>

    )
}
   

export default AdminBlogList;