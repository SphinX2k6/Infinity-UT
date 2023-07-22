const fetch = require('node-fetch');
let charDataCenter = 'https://raw.githubusercontent.com/SphinX2k6/infinity-database/main/characters.json'

async function botsData() {
  const response = await fetch(charDataCenter);
  const data = await response.json();
  const botIDs = data.map(obj => obj.id);
  const botNames = data.map(obj => obj.data.name);
  return {
    
    botIDs,
    botNames
    
  };
}

async function getCharDataById(id) {
  try {
    const response = await fetch(charDataCenter);
    const data = await response.json();
    const charData = data.find(obj => obj.id === String(id));
    if (!charData) {
      throw new Error(`Character with ID ${id} not found.`);
    }
    const { name: charName, botLogos: charLogo } = charData.data;
    return { charName, charLogo };
  } catch (error) {
    console.error('Failed to fetch character data:', error);
    throw new Error('Failed to fetch character data.');
  }
}

module.exports = { getCharDataById, botsData };

