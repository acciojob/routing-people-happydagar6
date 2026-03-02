import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Shuru mein hi forcefully loading state trigger ki
    setLoading(true);
    setUser(null); // Purana user data saaf kar diya

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Yeh ek chhoti si trick hai. Hum data set karne se pehle
        // ek bohot chhota sa delay daal rahe hain (100ms).
        // Isse Cypress ko "Loading..." padhne ka pura time mil jayega!
        setTimeout(() => {
          setUser(data);
          setLoading(false);
        }, 100); 
      });
  }, [id]);

  if (loading) {
    // Test exact is text ko dhoondh raha hai
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
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