const postFavoritesCard = async (
  path,
  id,
  name,
  price,
  urlImg,
  idProduct,
  color
) => {
  const response = await fetch(`http://localhost:5000/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: idProduct,
      name: name,
      price: price,
      urlImg: urlImg,
      idProduct: idProduct,
      color: color,
    }),
  });
  const data = response.json();
  return data;
};

export default postFavoritesCard;
