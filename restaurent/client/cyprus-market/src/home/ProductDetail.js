// ProductDetail.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import styled from 'styled-components';
import { addToCart } from '../../reducer/reducer';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.currentProduct);

  if (!product) {
    return <div>No product selected.</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <DetailContainer>
      <img src={product.image} alt={product.name} />
      <DetailInfo>
        <h1>{product.name}</h1>
        <p>${product.price.toFixed(2)}</p>
        <Button variant="contained" color="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </DetailInfo>
    </DetailContainer>
  );
};

export default ProductDetail;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  img {
    width: 300px;
    height: auto;
    object-fit: cover;
    margin-bottom: 20px;
  }
`;

const DetailInfo = styled.div`
  text-align: center;
  h1 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
    font-size: 1.2rem;
  }
`;
