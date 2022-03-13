import React, { useState } from 'react';
import styled from 'styled-components';
import ProductItem from '../product-item/Product-item.js';
import ModalEl from '../modal/ModalEl.js';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBuyCards, modalOpen } from '../../store/actions.js';
import BuyForm from '../form/form.js';

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

const HedingBuyComponent = styled.h1`
  color: white;
  text-align: center;
  padding: 20px;
`;

function Buy() {
  const [modal, setModal] = useState(false);
  const [card, setRemoveCard] = useState([]);
  const dispatch = useDispatch();

  const stateBuyCards = useSelector((state) =>
    state.cards.all.filter(({ buy }) => buy)
  );

  const clickCancel = () => {
    modal ? setModal(false) : setModal(true);
    dispatch(modalOpen(false));
  };

  const clickModalButton = () => {
    modal ? setModal(false) : setModal(true);
    dispatch(deleteBuyCards(card));
    dispatch(modalOpen(false));
  };

  return (
    <>
      {stateBuyCards.length === 0 ? (
        <HedingBuyComponent>No Element</HedingBuyComponent>
      ) : (
        <>
          <BuyForm />
          <ProductListComponent>
            {stateBuyCards.map(({ name, price, urlImg, idProduct, color }) => {
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
                  btnText='X'
                  classNameButton='close__button'
                  addToCard={() => {
                    modal ? setModal(false) : setModal(true);
                    dispatch(modalOpen(true));
                    setRemoveCard(idProduct);
                  }}
                />
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
      )}
    </>
  );
}

export default Buy;
