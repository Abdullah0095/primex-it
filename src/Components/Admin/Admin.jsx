import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.name.value;
        const serviceDescription = form.detail.value;

        const service = { serviceName, serviceDescription };
        console.log(service)

        fetch('http://localhost:5000/service', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(service)
        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("Service added successfully");
                    form.reset();
                }
            })
    }

    const handlePostBlog = event => {

        event.preventDefault();
        const form = event.target;
        const blogTitle = form.title.value;
        const blogDescription = form.description.value;
        const blogLink = form.link.value;
        const blog = { blogTitle, blogDescription, blogLink };
        console.log(blog);

        fetch('http://localhost:5000/blog', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("Blog added successfully!!!!!");
                    form.reset();
                }
            })

    }

    return (
        <>
            <section>
                <div>
                    <Link to='/'><h1 className='text-center m-10 text-5xl font-bold text-white'>primeX-it</h1></Link>
                </div>
                <div>
                    <div className='grid md:grid-cols-2 m-16 gap-14'>
                        <div className="hero md:min-h-[400px]" >
                            <div className="hero-overlay bg-opacity-50"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md text-white">
                                    <h1 className="mb-5 text-5xl font-bold text-lime-400">Add Service</h1>
                                    <form onSubmit={handleAddService}>
                                        <label className='m-2 font-bold' htmlFor="">Service Name</label>
                                        <input className='m-4 h-8' type="text" name="name" id="" /> <br />
                                        <label className='m-4 font-bold' htmlFor="">Service Detail</label>
                                        <textarea name="detail" id="" cols="25" rows="3" ></textarea> <br />

                                        <input className='m-8 p-2  border-4 border-sky-500 hover:bg-black hover:text-orange-50' type="submit" value="Add Service" />

                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="hero md:min-h-[400px]" >
                            <div className="hero-overlay bg-opacity-50"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md text-white">
                                    <h1 className="mb-5 text-5xl font-bold text-lime-400">Add Blog</h1>
                                    <form className='m-2 font-bold' onSubmit={handlePostBlog}>

                                        <label htmlFor="">Blog Title</label>
                                        <input className='h-8 m-2' type="text" name="title" id="" /> <br />
                                        <label htmlFor="">Blog detail</label>
                                        <textarea className='h-16 m-2' type="text" name="description" id="" /> <br />
                                        <label className='m-4 font-bold' htmlFor="">Blog Link</label>
                                        <textarea name="link" id="" cols="25" rows="3" ></textarea> <br />

                                        <input className='m-10 p-2  border-4 border-sky-500 hover:bg-black hover:text-orange-50' type="submit" value="Post Blog" />


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* service and blog list */}
            <section>
                <div>
                    <div className='grid md:grid-cols-2 m-16 gap-14'>
                        <div className="hero md:min-h-[400px]" >
                            <div className="hero-overlay bg-opacity-50"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md text-white">
                                    <h1 className="mb-5 text-5xl font-bold text-lime-400">Available Services</h1>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="hero md:min-h-[400px]" >
                            <div className="hero-overlay bg-opacity-50"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md text-white">
                                    <h1 className="mb-5 text-5xl font-bold text-lime-400">Available Blogs</h1>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Admin;