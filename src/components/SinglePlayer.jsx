// vite-project/src/components/SinglePlayer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePlayer } from '../API';

const SinglePlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSinglePlayer(id);
      console.log("SinglePlayer data:", data);
      setPlayer(data);
    };
    fetchData();
  }, [id]);

  const handleDelete = () => {
    // Remove the player from the list
  };

  if (!player) return <div>Loading...</div>;

  return (
    <div>
      <h4>{player.name}</h4>
      <p>{player.team}</p>
      <p>{player.position}</p>
      <button onClick={handleDelete}>Remove Player</button>
    </div>
  );
};

export default SinglePlayer;