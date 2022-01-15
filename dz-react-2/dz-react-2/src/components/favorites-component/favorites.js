import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from '../product-item/Product-item.js';
import ModalEl from '../modal/ModalEl.js';

const ProductListComponent = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

function Favorites() {
  const [favoritesCards, setFavoritesCards] = useState([]);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    modal ? setModal(false) : setModal(true);
  };

  useEffect(() => {
    const getCards = async () => {
      const cardsServer = await cardsFromServer();
      setFavoritesCards(cardsServer);
    };
    getCards();
  }, [favoritesCards]);

  const cardsFromServer = async () => {
    try {
      const response = await fetch('http://localhost:5000/favorites');
      const cardsRespons = await response.json();
      return cardsRespons;
    } catch (error) {
      console.log(error);
    }
  };

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
            <button onClick={openModal} className='button'>
              Add
            </button>
            <button onClick={openModal} className='button'>
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
