import { useEffect, useState } from "react";

import "../index.css";

export default function GreetingPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts.

  return loading ? (
    <div>Loading...</div>
  ) : (
    //Props
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Greeting name={user.name} />
        </li>
      ))}
    </ul>
  );
}
