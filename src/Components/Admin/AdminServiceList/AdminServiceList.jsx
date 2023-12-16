import { useLoaderData } from 'react-router-dom';

const AdminServiceList = () => {
    const serviceData = useLoaderData();

    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table text-center text-lg font-bold">
                        <thead>
                            <tr className='text-xl'>
                                <th></th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            serviceData.map((service, index) => <ServiceListDisplay index={index} key={service._id} service={service}></ServiceListDisplay>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

const ServiceListDisplay = ({ service, index }) => {

    const { serviceName } = service;

    const handleDelete = (_id) => {
        console.log("delete the id", _id);
        window.location.reload();

        fetch(`http://localhost:5000/service/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    alert("Successfully deleted from database");
                }
            })

    }


    return (
        <tbody>

            <tr>
                <th>{index + 1}</th>
                <td className='text-white'>{serviceName}</td>
                <td><button className="btn btn-warning w-24" onClick={() => handleDelete(service._id)}>delete</button></td>

            </tr>

        </tbody>

    )
}

export default AdminServiceList;