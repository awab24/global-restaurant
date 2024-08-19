import React, { useState } from 'react';
import styled from 'styled-components';
import Home from './Home';
import ImgSlider from './ImgSlider';
import Products from './Products';
import CartViewer from './CartViewer';

function AllHome() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <Container>
      
        <Home />
        <ImgSlider />
        <Products />
      


    </Container>
  );
}

export default AllHome;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  overflow-y: auto;
  color: #fff;
  font-family: 'Arial', sans-serif;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  max-height: 100vh;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.5); /* Adding a dark overlay for better readability */
  border-radius: 10px;
  margin: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ViewCartButton = styled.button`
  padding: 15px 30px;
  background-color: #ffcc00;
  border: none;
  border-radius: 10px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
  }
`;

const CartSection = styled.div`
  position: fixed;
  top: 100px;
  right: 20px;
  width: 300px;
  height: 400px;
  overflow-y: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;
