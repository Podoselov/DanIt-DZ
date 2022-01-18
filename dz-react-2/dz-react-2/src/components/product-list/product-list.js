import React, { useState, useEffect } from 'react';
import ProductItem from '../product-item/Product-item.js';
import styled from 'styled-components';
import ModalEl from '../modal/ModalEl.js';
import FetchGet from '../../API/fetch-get/FetchGet.js';

const ProductListComponent = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

function ProductList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await FetchGet(`cards`);
      setCards(cardsFromServer);
    };
    getCards();
  }, []);

  const [modal, setModal] = useState(false);

  const openModal = () => {
    modal ? setModal(false) : setModal(true);
  };

  return (
    <>
      <ProductListComponent>
        {cards.map(({ name, price, urlImg, idProduct, color, star }) => {
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
              starColor={star}
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

export default ProductList;
