import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from '../product-item/Product-item.js';
import ModalEl from '../modal/ModalEl.js';
import FetchGet from '../../API/fetch-get/FetchGet.js';
import DeleteFetch from '../../API/feth-delete/DeleteFetch.js';

const ProductListComponent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  .close__button {
    color: #1e1e20;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

function Buy() {
  const [buyCards, setBuyCards] = useState([]);
  const [modal, setModal] = useState(false);
  const [card, setRemoveCard] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsServer = await FetchGet('buy');
      setBuyCards(cardsServer);
    };
    getCards();
  }, []);

  const clickCancel = () => {
    modal ? setModal(false) : setModal(true);
  };

  const clickModalButton = () => {
    modal ? setModal(false) : setModal(true);
    const { id } = card;
    DeleteFetch('buy', id);
    removeCard(id);
  };

  const removeCard = (idProduct) => {
    setBuyCards(
      buyCards.filter(({ id }) => {
        return id !== idProduct;
      })
    );
  };

  return (
    <>
      <ProductListComponent>
        {buyCards.map(({ name, price, urlImg, idProduct, color }) => {
          return (
            <>
              <ProductItem
                key={idProduct}
                name={name}
                price={price}
                urlImg={urlImg}
                idProduct={idProduct}
                color={color}
                active={modal}
                setActive={setModal}
                btnText='X'
                classNameButton='close__button'
                addToCard={() => {
                  modal ? setModal(false) : setModal(true);
                  setRemoveCard({
                    id: idProduct,
                  });
                }}
              />
            </>
          );
        })}
      </ProductListComponent>
      <ModalEl
        active={modal}
        setActive={setModal}
        header={`Do you want to remove this file?`}
        text={`Are you sure you want to remove it?`}
        action={
          <div>
            <button onClick={clickModalButton} className='button'>
              Yes
            </button>
            <button onClick={clickCancel} className='button'>
              No
            </button>
          </div>
        }
        closeButton
      />
    </>
  );
}

export default Buy;
