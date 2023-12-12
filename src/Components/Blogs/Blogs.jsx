import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Blogs = () => {

    const blogData = useLoaderData();
    // console.log(blogData);

    return (
        <div className='bg-white min-h-screen mt-[-50px]'>
            <h1 className='text-center text-black text-5xl font-bold py-12'>Blog post</h1>
            <div className='grid md:grid-cols-3 mx-16 gap-14'>
                {blogData.map(blog => <BlogCard blog={blog} key={blog._id}></BlogCard>)}
            </div>
        </div>
    );
};

const BlogCard = ({ blog}) => {

    const { blogTitle, blogDescription, blogLink} = blog;

    return <>
        <div className="hero md:min-h-[400px] ">
            <div className="card min-h-[300px] max-h-fit w-96 shadow-xl bg-slate-950 text-white">
                <div className="card-body">
                    <h2 className="card-title font-serif  italic">{blogTitle}</h2>
                    <p className='font-mono text-lg'>{blogDescription}</p>
                    <div className="card-actions justify-end">
                        <Link to={blogLink} target="_blank" ><button className="btn btn-accent font-bold">Read More ...</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Blogs;