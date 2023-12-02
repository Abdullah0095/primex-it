import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AdminServiceList = () => {
    const serviceData = useLoaderData();
    // console.log(serviceData)
    return (
        <div>
            <h1>service list is now avalable in admin</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table text-center">
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
        console.log("clicked the id", _id)
    }

    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <th>1</th>
                <td>{serviceName}</td>
                <td><button className="btn btn-warning" onClick={() => handleDelete(service._id)}>delete</button></td>

            </tr>

        </tbody>

    )
}

export default AdminServiceList;