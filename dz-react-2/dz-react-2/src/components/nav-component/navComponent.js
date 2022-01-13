import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavComponent = styled.nav`
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
  .nav__list {
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
  .nav__item {
    text-align: center;
    padding: 14px 16px;
  }
  a {
    color: #666;
  }
`;

function navComponent() {
  return (
    <NavComponent className='page__nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <Link to='/'>PRODUCTS</Link>
        </li>
        <li className='nav__item'>
          <Link to='/favorites'>FAVORITES</Link>
        </li>
        <li className='nav__item'>
          <Link to='/buy'>BUY</Link>
        </li>
      </ul>
    </NavComponent>
  );
}

export default navComponent;
