import React from 'react';

const AdminAddBlog = () => {
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
        <div className='border border-red-600'>
            
            <div className="" >
                
                <div>
                    <div className=" text-white">
                        <h1 className="text-5xl font-bold text-lime-400">Add Blog</h1>
                        <form c onSubmit={handlePostBlog}>

                            <label htmlFor="">Blog Title</label>
                            <input  type="text" name="title" id="" /> <br />
                            <label htmlFor="">Blog detail</label>
                            <textarea  type="text" name="description" id="" /> <br />
                            <label  htmlFor="">Blog Link</label>
                            <textarea name="link" id="" cols="25" rows="3" ></textarea> <br />

                            <input className='m-10 p-2  border-4 border-sky-500 hover:bg-black hover:text-orange-50' type="submit" value="Post Blog" />


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAddBlog;