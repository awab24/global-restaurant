import React from 'react'
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import styled from 'styled-components';
import CartViewer from '../CartViewer';
import { addToCart } from '../../reducer/reducer';

const products = [
  { id: 1, name: 'Lemonade', price: 10.00, image: '/images/drink1.jpg' },
  { id: 2, name: 'Iced Tea', price: 15.00, image: '/images/drink2.jpg' },
  { id: 3, name: 'Mojito', price: 20.00, image: '/images/drink3.jpg' },
  { id: 3, name: 'Margarita', price: 20.00, image: '/images/drink4.jpg' },
  { id: 3, name: 'Smoothie', price: 20.00, image: '/images/drink5.jpg' },
  { id: 3, name: 'Milkshake', price: 20.00, image: '/images/drink6.jpg' },
  { id: 3, name: 'Hot Chocolate', price: 20.00, image: '/images/drink7.jpg' },
  { id: 3, name: 'Iced Coffee', price: 20.00, image: '/images/drink8.jpg' },
  { id: 3, name: 'Fruit Punch', price: 20.00, image: '/images/drink9.jpg' },
  // Add more products as needed
];

function Drinks() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Container>
      <ProductSection>
        <Heading>Drinks</Heading>
        {products.map(product => (
          <Button key={product.id} onClick={() => handleAddToCart(product)}>
            <ProductCard>
              <img src={product.image} alt={product.name} />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          </Button>
        ))}
      </ProductSection>
      <CartSection>
        <CartViewer />
      </CartSection>
    </Container>
  )
}

export default Drinks

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  background: linear-gradient(to right, #f9f9f9, #e9ecef);
  max-width: 100vw;
  box-sizing: border-box;
`;

const CartSection = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 25%;
  padding: 10px;
`;

const ProductSection = styled.div`
  flex: 3;
  min-width: 300px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  border: 3px solid #ddd;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const Heading = styled.h1`
  grid-column: span 2;
  text-align: center;
  width: 100%;
`;

const ProductCard = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid rgba(249, 249, 249, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  background: #fff;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    border-color: rgba(249, 249, 249, 0.5);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }
`;

const ProductInfo = styled.div`
  padding: 10px;
  text-align: center;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  margin: 5px 0 0;
  color: #888;
`;
