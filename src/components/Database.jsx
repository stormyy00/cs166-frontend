"use client";

import { useState, useEffect, useContext } from 'react';
import Context from './Context';

const DatabaseTestComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/all-users', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const responseData = await response.json();
        setData(responseData.message); // Assuming your API returns { message: data }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Data from Database</h2>
      <ul>
        {data.map((game) => (
          <li key={game.login}>
            <h3>{game.password}</h3>
            <p><strong>Genre:</strong> {game.role}</p>
            <p><strong>Price:</strong> ${game.favgames}</p>
            <p><strong>Description:</strong> {game.phonenum}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DatabaseTestComponent;
