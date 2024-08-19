import React, { useEffect, useState } from "react";
import './Reviews.css';
const Reviews = () => {
  const [users, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  const obtenerPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const userResponse = await response.json();
    setPosts(userResponse);
    setIsLoading(false)
  };

  useEffect(() => {
    obtenerPosts();
  }, []);
  console.log(users);
  return (
    <>
      <div className="wrapper">
        {isLoading && <h2>Buscando usuarios...</h2>}
        {users &&
          users.map((user) => {
            return (
              <h1 key={user.id} className={`item item${user.id}`}>
                {user.name}
              </h1>
            );
          })}
      </div>
    </>
  );
};

export default Reviews;
