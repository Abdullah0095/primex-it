import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Blogs = () => {

    const blogData = useLoaderData();
    console.log(blogData);


    return (
        <div>
            <h1 className='text-center m-4 text-5xl font-bold'>Blog post</h1>
            <div className='grid md:grid-cols-2 mx-16 gap-14'>
                {
                    blogData.map(blog => <BlogCard blog={blog} key={blog._id}></BlogCard>)
                }
            </div>

        </div>
    );
};

const BlogCard = ({ blog }) => {

    const { blogTitle, blogDescription, blogLink} = blog;

    return <>
        <div className="hero md:min-h-[400px]">
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-lime-400">{blogTitle}</h1>
                    <p className="mb-5 text-black text-lg font-semibold">{blogDescription}</p>
                    <Link to={blogLink} target="_blank" ><button className="btn btn-wide btn-outline btn-accent">Read more ...</button></Link>
                    
                </div>
            </div>
        </div>
    </>
}

export default Blogs;