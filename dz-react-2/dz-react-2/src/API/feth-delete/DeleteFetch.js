const deleteFavoritesCard = async (idProduct) => {
  const response = await fetch(`http://localhost:5000/favorites/${idProduct}`, {
    method: 'DELETE',
  });
  return response;
};

export default deleteFavoritesCard;
