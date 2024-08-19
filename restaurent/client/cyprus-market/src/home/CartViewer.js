import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PayPalButton from './PayPalButton.js';

function CartViewer() {
  const cartItems = useSelector((state) => state.cart.addToCartItems);
  const total = useSelector((state) => state.cart.total);

  return (
    <CartContainer>
      <CartTitle>CART</CartTitle>
      <CartItems>
        {cartItems.map((item, index) => (
          <CartItem key={index}>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>Price: ${item.price}</ItemPrice>
          </CartItem>
        ))}
      </CartItems>
      <TotalAmount>Total Amount: ${total.toFixed(2)}</TotalAmount>
      <PayPalSection>
        <PayPalButton amount={total} />
      </PayPalSection>
    </CartContainer>
  );
}

export default CartViewer;

const CartContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 4px solid black;
  border-radius: 20px;
  background-color: white;
  color: black;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const CartTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const CartItems = styled.div`
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid black;
`;

const ItemName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const ItemPrice = styled.div`
  font-size: 14px;
`;

const TotalAmount = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const PayPalSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
