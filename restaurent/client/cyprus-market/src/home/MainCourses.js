import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function MainCourse() {
  // Declare a useState const for managing product data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the API
    fetch('http://localhost:5000/api/endpoints/getAllSignedPublisherData')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <ProductGallery style={{'position':'relative', 'top':'-700px'}}> 
    breakfast
        <Button>
        <ProductCard>
          <img src= '/images/product1.jpg'  />
          <ProductInfo>
            <ProductName> 'Product Name'</ProductName>
            <ProductPrice>$ '0.00'</ProductPrice>
          </ProductInfo>
        </ProductCard>
        </Button>

        
        <Button>
        <ProductCard>
          <img src= '/images/product1.jpg'  />
          <ProductInfo>
            <ProductName> 'Product Name'</ProductName>
            <ProductPrice>$ '0.00'</ProductPrice>
          </ProductInfo>
        </ProductCard>
        </Button>
        <Button>
        <ProductCard>
          <img src= '/images/product1.jpg'  />
          <ProductInfo>
            <ProductName> 'Product Name'</ProductName>
            <ProductPrice>$ '0.00'</ProductPrice>
          </ProductInfo>
        </ProductCard>
        </Button>


        <ProductCard>
          <img src= '/images/product1.jpg'  />
          <ProductInfo>
            <ProductName> 'Product Name'</ProductName>
            <ProductPrice>$ '0.00'</ProductPrice>
          </ProductInfo>
        </ProductCard>


        <ProductCard>
          <img src= '/images/product1.jpg'  />
          <ProductInfo>
            <ProductName> 'Product Name'</ProductName>
            <ProductPrice>$ '0.00'</ProductPrice>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <img src= '/images/product1.jpg'  />
          <ProductInfo>
            <ProductName> 'Product Name'</ProductName>
            <ProductPrice>$ '0.00'</ProductPrice>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <img src= '/images/product1.jpg'  />
          <ProductInfo>
            <ProductName> 'Product Name'</ProductName>
            <ProductPrice>$ '0.00'</ProductPrice>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <img src= '/images/product1.jpg'  />
          <ProductInfo>
            <ProductName> 'Product Name'</ProductName>
            <ProductPrice>$ '0.00'</ProductPrice>
          </ProductInfo>
        </ProductCard>
        

    </ProductGallery>
  );
}

export default MainCourse;

// Styled Components

const ProductGallery = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
