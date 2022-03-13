const cardsFromServer = async (path) => {
  try {
    const response = await fetch(`http://localhost:5000/${path}`);
    const cardsRespons = await response.json();
    return cardsRespons;
  } catch (error) {
    console.log(error);
  }
};

export default cardsFromServer;
