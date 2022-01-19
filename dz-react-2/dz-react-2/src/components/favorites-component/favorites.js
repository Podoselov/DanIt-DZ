import React, { useState, useEffect, useCallback, useContext } from 'react';
import styled from 'styled-components';
import ProductItem from '../product-item/Product-item.js';
import ModalEl from '../modal/ModalEl.js';
import FetchGet from '../../API/fetch-get/FetchGet.js';
import FetchPost from '../../API/fetch-post/FetchPost.js';

const ProductListComponent = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

function Favorites() {
  const [favoritesCards, setFavoritesCards] = useState([]);
  const [modal, setModal] = useState(false);
  const [card, setCard] = useState([]);

  const clickAddToCard = () => {
    const { id, name, price, urlImg, idProduct, color } = card;
    modal ? setModal(false) : setModal(true);
    FetchPost('buy', id, name, price, urlImg, idProduct, color);
  };

  const clickCancel = () => {
    modal ? setModal(false) : setModal(true);
  };

  const getUrl = useCallback(async () => {
    const cardsServer = await FetchGet(`favorites`);
    setFavoritesCards(cardsServer);
  }, []);

  useEffect(() => {
    getUrl();
  }, [getUrl]);

  return (
    <>
      <ProductListComponent>
        {favoritesCards.map(({ name, price, urlImg, idProduct, color }) => {
          return (
            <ProductItem
              key={idProduct}
              name={name}
              price={price}
              urlImg={urlImg}
              idProduct={idProduct}
              color={color}
              active={modal}
              setActive={setModal}
              btnText='Add to card'
              addToCard={() => {
                modal ? setModal(false) : setModal(true);
                setCard({
                  id: idProduct,
                  name: name,
                  price: price,
                  urlImg: urlImg,
                  idProduct: idProduct,
                  color: color,
                });
              }}
            />
          );
        })}
      </ProductListComponent>
      <ModalEl
        active={modal}
        setActive={setModal}
        header={`Do you want to add this file?`}
        text={`Are you sure you want to add it?`}
        action={
          <div>
            <button onClick={clickAddToCard} className='button'>
              Add
            </button>
            <button onClick={clickCancel} className='button'>
              Cancel
            </button>
          </div>
        }
        closeButton
      />
    </>
  );
}

export default Favorites;
