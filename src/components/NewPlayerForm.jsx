import React, { useState } from 'react';

const NewPlayerForm = () => {
  const [playerName, setPlayerName] = useState('');
  const [playerPosition, setPlayerPosition] = useState('');

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPlayerPosition(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPlayer = {
      name: playerName,
      position: playerPosition
    };
    console.log('New player submitted:', newPlayer);
 
    setPlayerName('');
    setPlayerPosition('');
  };

  return (
    <div>
      <h2>Add New Player</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={playerName}
            onChange={handleNameChange}
            required
          />
        </label>
        <br />
        <label>
          Position:
          <input
            type="text"
            value={playerPosition}
            onChange={handlePositionChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
