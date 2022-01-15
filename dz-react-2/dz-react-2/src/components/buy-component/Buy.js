import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from '../product-item/Product-item.js';

const ProductListComponent = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

function Buy() {
  const [buyCards, setBuyCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsServer = await cardsFromServer();
      setBuyCards(cardsServer);
    };
    getCards();
  }, []);

  const cardsFromServer = async () => {
    try {
      const response = await fetch('http://localhost:5000/buy');
      const cardsRespons = await response.json();
      return cardsRespons;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ProductListComponent></ProductListComponent>
    </>
  );
}

export default Buy;
