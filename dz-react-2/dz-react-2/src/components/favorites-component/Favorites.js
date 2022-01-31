import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import ModalEl from '../modal/ModalEl.js';
import ProductItem from '../product-item/Product-item.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFavoritesCards,
  getBuyCards,
  modalOpen,
} from '../../store/actions.js';

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

function Favorites() {
  const [modal, setModal] = useState(false);
  const [card, setCard] = useState([]);
  const dispatch = useDispatch();
  const stateFavoritesCards = useSelector((state) =>
    state.cards.all.filter(({ favorites }) => favorites)
  );

  const clickAddToCard = () => {
    modal ? setModal(false) : setModal(true);
    dispatch(getBuyCards(card));
    dispatch(modalOpen(false));
  };

  const clickCancel = () => {
    modal ? setModal(false) : setModal(true);
    dispatch(modalOpen(false));
  };

  const getUrl = useCallback(async () => {
    dispatch(getFavoritesCards(stateFavoritesCards));
  }, [stateFavoritesCards]);

  useEffect(() => {
    getUrl();
  }, [getUrl]);

  const removeCard = (idProduct) => {
    stateFavoritesCards.filter(({ id }) => {
      return id !== idProduct;
    });
  };

  return (
    <>
      <ProductListComponent>
        {stateFavoritesCards.map(
          ({ name, price, urlImg, idProduct, color }) => {
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
                favoritesCard={removeCard}
                btnText='Add to card'
                classNameButton='item__button'
                addToCard={() => {
                  modal ? setModal(false) : setModal(true);
                  dispatch(modalOpen(true));
                  setCard(idProduct);
                }}
              />
            );
          }
        )}
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
