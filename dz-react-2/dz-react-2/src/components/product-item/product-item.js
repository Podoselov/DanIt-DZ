import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import useLocalStorage from '../localStorage/UseLocalStorage.js';
import FetchPost from '../../API/fetch-post/FetchPost.js';
import DeleteFetch from '../../API/feth-delete/DeleteFetch.js';
import Context from '../../context/context.js';

const ItemComponent = styled.li`
  list-style: none;
  margin: 7px;
  padding: 0;
  background-color: #ffffff;
  .item__header {
    display: flex;
    justify-content: space-between;
  }
  div {
    padding: 5px 20px 10px;
    h2 {
      font-size: 18px;
      color: rgb(133, 133, 133);
      font-weight: bold;
      text-align: left;
      padding-bottom: 10px;
    }
    svg {
      margin-bottom: 10px;
    }
    div {
      padding: 0;
    }
    p {
      font-size: 13px;
      color: rgb(0, 0, 0);
      font-weight: bold;
      line-height: 1.385;
      margin-bottom: 10px;
    }

    .item__price {
      font-size: 26px;
      font-weight: bold;
      line-height: 1;
      margin: 5px 0;
      &-container {
        display: flex;
        justify-content: space-between;
      }
    }
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
  }
`;

function ProductItem({
  id,
  name,
  price,
  urlImg,
  idProduct,
  color,
  btnText,
  addToCard,
}) {
  const [favoritesAddStar, setStar] = useLocalStorage(idProduct);

  const changeStarColor = async () => {
    if (!favoritesAddStar) {
      setStar(true);
      await FetchPost(`favorites`, id, name, price, urlImg, idProduct, color);
    } else {
      setStar(false);
      await DeleteFetch(idProduct);
    }
  };

  return (
    <ItemComponent>
      <img className='item__img' src={urlImg} alt='логотип' />
      <div className='item__header'>
        <h2 className='item__heading'>{name}</h2>
        <AiOutlineStar
          onClick={changeStarColor}
          fill={favoritesAddStar ? 'yellow' : 'black'}
        />
      </div>
      <div>
        <p className='item__idProduct'>
          Product ID:
          <span className='item__idProduct-name'> {idProduct}</span>
        </p>
        <p className='item__color'>Color: {color}</p>
        <div className='item__price-container'>
          <p className='item__price'>{price} $</p>
          <button onClick={addToCard} className='item__button'>
            {btnText}
          </button>
        </div>
      </div>
    </ItemComponent>
  );
}

ProductItem.defaultProps = {
  name: 'Name',
  price: 111,
  urlImg: 'url',
  idProduct: 1222223332,
  color: 'black',
};

ProductItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  urlImg: PropTypes.string,
  idProduct: PropTypes.string,
  color: PropTypes.string,
};

export default ProductItem;
