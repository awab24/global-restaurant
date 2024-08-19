import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ResturantsProducts() {
  return (
    <Container>
        <CartBorder><Cart>CART</Cart></CartBorder>
        <div style={{'position': 'relative', 'top': '-450px','background-color': 'blue', 'height': '200px',}}>
          <a href="/productName">
          <Img src="/images/Burger.webp" alt=""/>
          </a>

        <Details>
          <b>
          humburger from kintaki, contiang 3 layers of burger with extreme cheese 
          </b>
   <PlusButton>
    <FontAwesomeIcon icon={faPlus}/>
   </PlusButton>
          </Details>
        </div>

        <div style={{'position': 'relaive', 'height': '40px'}}>

</div>


        <div style={{'position': 'relative', 'top': '-450px','background-color': 'blue', 'height': '200px', }}>
          <a href="/productName">
          <Img src="/images/Burger.webp" alt=""/>
          </a>

        <Details>
          <b>
          humburger from kintaki, contiang 3 layers of burger with extreme cheese 
          </b>
   <PlusButton>
    <FontAwesomeIcon icon={faPlus}/>
   </PlusButton>
          </Details>
        </div>

<div style={{'position': 'relaive', 'height': '40px'}}>

</div>
        <div style={{'position': 'relative', 'top': '-450px','background-color': 'blue', 'height': '200px', }}>
          <a href="/productName">
          <Img src="/images/Burger.webp" alt=""/>
          </a>

        <Details>
          <b>
          humburger from kintaki, contiang 3 layers of burger with extreme cheese 
          </b>
   <PlusButton>
    <FontAwesomeIcon icon={faPlus}/>
   </PlusButton>
          </Details>
        </div>
    </Container>
  )
}

export default ResturantsProducts

const Container = styled.div`
background-color: blue;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
height: 633px;
`

const Img = styled.img`
height: 150px;
width: 150px;
position: relative;
top: 22px;
right: 590px;
border-radius: 30px;
border: 4px solid #000;
cursor: pointer;
`

const Details = styled.div`
position: relative;
top: -120px;
width: 500px;
left: 190px
`

const PlusButton = styled.button`
position: relative;
top: 75px;
left: -280px;
border-radius: 5px;
cursor: pointer;
`


const Cart=styled.b`
position: relative;
top:20px;
color: black;
border-radius: 40px;
background-color: blue;
`
const CartBorder= styled.div`
position: relative;
top: 150px;
left: 990px;
   width: 350px; 
    height: 470px; 
    border: 4px solid #000; 
border-color: black;
border-radius: 40px;
background-color: blue;
z-index: 1;
`