const deleteFavoritesCard = async (path, idProduct) => {
  const response = await fetch(`http://localhost:5000/${path}/${idProduct}`, {
    method: 'DELETE',
  });
  return response;
};

export default deleteFavoritesCard;
