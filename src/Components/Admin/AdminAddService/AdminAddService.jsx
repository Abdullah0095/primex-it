import React from 'react';

const AdminAddService = () => {
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.name.value;
        const serviceDescription = form.detail.value;
        const service = { serviceName, serviceDescription};
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
        <div className='grid justify-items-center py-4'>
            <div className="max-w-md text-white">
                <h1 className="mb-5 text-5xl text-center font-bold text-lime-400">Add Service</h1>
                <form onSubmit={handleAddService}>
                    <label className='m-2 font-bold' htmlFor="">Service Name</label>
                    <input className='m-2 h-16 w-96 bg-white rounded-md text-black text-xl' type="text" name="name" id="" /> <br />
                    <label className='m-2 font-bold' htmlFor="">Service Detail</label>
                    <textarea className='m-2 h-16 w-96 bg-white rounded-md text-black text-xl' type="text" name="detail" id="" /> <br />
                    <input className='m-2 p-3 rounded-md  border-4 border-sky-500 hover:bg-emerald-800 hover:text-black' type="submit" value="Add Service" />
                </form>
            </div>
        </div>

    );
};

export default AdminAddService;