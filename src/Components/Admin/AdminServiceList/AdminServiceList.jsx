import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AdminServiceList = () => {
    const serviceData = useLoaderData();

    const [number, setNumber] = useState(serviceData);
    console.log(number[0])
    return (
        <div>
            <h1>service list is now avalable in admin</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table text-center text-lg font-bold">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            serviceData.map(service => <ServiceListDisplay key={service._id} service={service}></ServiceListDisplay>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

const ServiceListDisplay = ({ service }) => {

    const { serviceName } = service;

    const handleDelete = (_id) => {
        console.log("delete the id", _id);

        fetch(`http://localhost:5000/service/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("Successfully deleted from database");
                }
            })
    }
    

    return (
        <tbody>
            
            <tr>
                <th>1</th>
                <td>{serviceName}</td>
                <td><button className="btn btn-warning" onClick={() => handleDelete(service._id)}>delete</button></td>

            </tr>

        </tbody>

    )
}

export default AdminServiceList;