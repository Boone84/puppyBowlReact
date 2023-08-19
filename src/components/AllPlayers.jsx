// vite-project/src/components/AllPlayers.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlayers } from '../API';
import '../App.css';

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlayers();
        if (Array.isArray(data)) {
          setPlayers(data);
        } else {
          console.error('Received data is not an array:', data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (players.length === 0) {
    return <p>No players to display</p>;
  }

  return (
    <div className="players-list">
      <h2 className="title">Player List</h2>
      <ul>
        {players.map(player => (
          <li key={player.id} className="player-card">
            <Link to={`/players/${player.id}`}>{player.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPlayers;