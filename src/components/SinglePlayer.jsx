import React, { useEffect, useState } from 'react';
import { fetchPlayer } from '../API/index.js';

const SinglePlayer = ({ match }) => {
  const [player, setPlayer] = useState(null);

  const getPlayer = async () => {
    try {
      const response = await fetchPlayer(match.params.id);
      if (response.success && response.data.player) {
        setPlayer(response.data.player);
      } else {
        console.error('API data is not in the expected format:', response);
      }
    } catch (error) {
      console.error('Error fetching player:', error);
    }
  };

  useEffect(() => {
    getPlayer();
  }, [match.params.id]);

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-player-container">
      <h1>{player.name}</h1>
      <img src={player.imageUrl} alt={player.name} className="player-image" />
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
    </div>
  );
};

export default SinglePlayer;

