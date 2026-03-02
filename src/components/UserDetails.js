import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // FIX: Set loading to true before fetching data
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      {/* Template literals ke andar sahi variables pass kiye */}
      <p>{`Name: ${user.name}`}</p>
      <p>{`Username: ${user.username}`}</p>
      <p>{`Email: ${user.email}`}</p>
      <p>{`Phone: ${user.phone}`}</p>
      <p>{`Website: ${user.website}`}</p>
      <br />
      <Link to="/">Back to User List</Link>
    </div>
  );
};

export default UserDetails;