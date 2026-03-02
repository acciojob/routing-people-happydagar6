import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const UserDetails = () => {

    const { id } = useParams();

    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }
  return (
    <div>
      <h1>User Details</h1>
        <p>Name: {users.name}</p>
        <p>Email: {users.email}</p>
        <p>Phone: {users.phone}</p>
        <p>Website: {users.website}</p>

        <br/>
        <Link to="/">Back to User List</Link>
    </div>
  )
}

export default UserDetails
