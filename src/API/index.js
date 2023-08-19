// vite-project/src/API/index.js
export const fetchPlayers = async () => {
    try {
      const res = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft-sf/players');
      const data = await res.json();
      console.log("Players:", data);
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  export const fetchSinglePlayer = async (id) => {
    try {
      const res = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft-sf/players/${id}`);
      return await res.json();
    } catch (error) {
      console.error(error);
    }
  };