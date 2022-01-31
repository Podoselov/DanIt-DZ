import React, { useState, useEffect, useCallback } from 'react';
import ProductItem from '../product-item/Product-item.js';
import styled from 'styled-components';
import ModalEl from '../modal/ModalEl.js';
import FetchGet from '../../API/fetch-get/FetchGet.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCards, getBuyCards, modalOpen } from '../../store/actions.js';

const ProductListComponent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  .item__button {
    font-size: 10px;
    color: rgb(255, 255, 255);
    line-height: 1.8;
    text-transform: uppercase;
    border-radius: 8px;
    background-color: rgb(30, 30, 32);
    padding: 5px 6px;
    cursor: pointer;
  }
`;

function ProductList() {
  const [modal, setModal] = useState(false);
  const [card, setCard] = useState([]);
  const dispatch = useDispatch();
  const stateCards = useSelector((state) => state.cards.all);

  const getCards = useCallback(async () => {
    const cardsFromServer = await FetchGet(`cards`);
    dispatch(getAllCards(cardsFromServer));
  }, []);

  useEffect(() => {
    getCards();
  }, [getCards]);

  const clickAddToCard = () => {
    modal ? setModal(false) : setModal(true);
    dispatch(modalOpen(false));
    dispatch(getBuyCards(card));
  };

  const clickCancel = () => {
    modal ? setModal(false) : setModal(true);
    dispatch(modalOpen(false));
  };

  return (
    <>
      <ProductListComponent>
        {stateCards.map(({ name, price, urlImg, idProduct, color }) => {
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
              classNameButton='item__button'
              addToCard={() => {
                modal ? setModal(false) : setModal(true);
                dispatch(modalOpen(true));
                setCard(idProduct);
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

export default ProductList;
