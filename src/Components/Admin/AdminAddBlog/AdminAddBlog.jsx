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
            <div className='grid justify-items-center py-4'>
            <div className="max-w-md text-white">
                <h1 className="mb-5 text-5xl text-center font-bold text-lime-400">Add Blog</h1>
                <form onSubmit={handlePostBlog}>
                    <label className='m-2 font-bold' htmlFor="">Blog title</label>
                    <input className='m-2 h-16 w-96' type="text" name="title" id="" /> <br />
                    <label className='m-2 font-bold' htmlFor="">Blog Detail</label>
                    <textarea className='m-2 h-16 w-96' type="text" name="description" id="" /> <br />
                    <label className='m-2 font-bold' htmlFor="">Blog Link</label>
                    <textarea className='m-2 h-16 w-96' type="text" name="link" id="" /> <br />
                    <input className='m-2 p-3 rounded-md  border-4 border-sky-500 hover:bg-emerald-800 hover:text-black' type="submit" value="Add Blog" />
                </form>
            </div>
        </div>
    );
};

export default AdminAddBlog;