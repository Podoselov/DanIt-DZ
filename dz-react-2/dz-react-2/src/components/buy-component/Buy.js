import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from '../product-item/Product-item.js';
import ModalEl from '../modal/ModalEl.js';
import FetchGet from '../../API/fetch-get/FetchGet.js';
import DeleteFetch from '../../API/feth-delete/DeleteFetch.js';

const ProductListComponent = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

function Buy() {
  const [buyCards, setBuyCards] = useState([]);
  const [modal, setModal] = useState(false);

  const clickCancel = () => {
    modal ? setModal(false) : setModal(true);
  };

  useEffect(() => {
    const getCards = async () => {
      const cardsServer = await FetchGet('buy');
      setBuyCards(cardsServer);
    };
    getCards();
  }, []);

  return (
    <>
      <ProductListComponent>
        {buyCards.map(({ name, price, urlImg, idProduct, color }) => {
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
            <button onClick={clickCancel} className='button'>
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

export default Buy;
