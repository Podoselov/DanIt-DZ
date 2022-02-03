import React from 'react';
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import Button from '../button-component/Button.js';
import { useDispatch, useSelector } from 'react-redux';
import { removeColorStar, addColorStar } from '../../store/actions.js';

const ItemComponent = styled.li`
  list-style: none;
  margin: 7px;
  padding: 0;
  position: relative;
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
  classNameButton,
}) {
  const favoritesCards = useSelector((state) => state.cards.all);
  const dispatch = useDispatch();

  const isFavorites = favoritesCards.some(
    (element) => element.idProduct === idProduct && element.favorites === true
  );

  const changeStarColor = () => {
    if (!isFavorites) {
      dispatch(addColorStar(idProduct));
    } else {
      dispatch(removeColorStar(idProduct));
    }
  };

  return (
    <ItemComponent key={idProduct}>
      <img className='item__img' src={urlImg} alt='логотип' />
      <div className='item__header'>
        <h2 className='item__heading'>{name}</h2>
        <AiOutlineStar
          onClick={changeStarColor}
          fill={isFavorites ? 'yellow' : 'black'}
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
          <Button
            classNameEl={classNameButton}
            handlClick={addToCard}
            text={btnText}
          />
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
