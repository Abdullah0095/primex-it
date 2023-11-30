import React from 'react';

const AdminAddService = () => {
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
    return (
        <div>
            
            <div className="hero md:min-h-[400px] " >
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
        </div>
    );
};

export default AdminAddService;