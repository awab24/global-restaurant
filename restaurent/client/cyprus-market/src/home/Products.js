import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Products() {
  // Declare a useState const for managing product data
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch product data from the API
    fetch('https://cyprus-market-374975026721.herokuapp.com/api/endpoints/getAllSignedPublisherData')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <ProductGallery style={{'position':'relative', 'top':'-130px'}}>
      <Button style={{ padding: 0 }} onClick={() => navigate('/seafood')}>
        <ProductCard>
          <img src='/images/seafood.jpg' alt='seafood' />
          <ProductInfo>
            <ProductName>Seafood</ProductName>
          </ProductInfo>
        </ProductCard>
      </Button>

      <Button style={{ padding: 0 }} onClick={() => navigate('/soups')}>
        <ProductCard>
          <img src='/images/soup.jpg' alt='soups' />
          <ProductInfo>
            <ProductName>Soups</ProductName>
          </ProductInfo>
        </ProductCard>
      </Button>
      

      
      <Button style={{ padding: 0 }} onClick={() => navigate('/breakfast')}>
        <ProductCard>
          <img src='/images/break6.jpg' alt='Breakfast' />
          <ProductInfo>
            <ProductName>Breakfast</ProductName>
          </ProductInfo>
        </ProductCard>
      </Button>
      
      <Button style={{ padding: 0 }} onClick={() => navigate('/salads')}>
        <ProductCard>
          <img src='/images/salads.jpg' alt='Salads' />
          <ProductInfo>
            <ProductName>Salads</ProductName>
          </ProductInfo>
        </ProductCard>
      </Button>

      <Button style={{ padding: 0 }} onClick={() => navigate('/desserts')}>
        <ProductCard>
          <img src='/images/desserts.jpg' alt='Desserts' />
          <ProductInfo>
            <ProductName>Desserts</ProductName>
          </ProductInfo>
        </ProductCard>
      </Button>



      <Button style={{ padding: 0 }} onClick={() => navigate('/drinks')}>
        <ProductCard>
          <img src='/images/drinks.jpg' alt='Drinks' />
          <ProductInfo>
            <ProductName>Drinks</ProductName>
          </ProductInfo>
        </ProductCard>
      </Button>


      <Button style={{ padding: 0 }} onClick={() => navigate('/coffees')}>
        <ProductCard>
          <img src='/images/coffees.jpg' alt='Soups' />
          <ProductInfo>
            <ProductName>Coffees</ProductName>
          </ProductInfo>
        </ProductCard>
      </Button>
    </ProductGallery>
  );
}

export default Products;

// Styled Components

const ProductGallery = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 20px;
  border: 3px solid #ddd;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
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
    height: 250px;  /* Increased height for larger images */
    object-fit: cover;
    display: block;
  }
`;

const ProductInfo = styled.div`
  padding: 15px;
  text-align: center;
`;

const ProductName = styled.h3`
  font-size: 1.5rem;  /* Increased font size for better visibility */
  margin: 0;
  color: #333;
`;
