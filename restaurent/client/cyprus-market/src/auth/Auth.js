import React from 'react'
import styled from 'styled-components'

function Auth() {
  return (
    <Container>
      <div style={{'display': 'flex',}}>
      <a href='/auth-client-sign-in' style={{'cursor': 'pointer', 'color': 'blue'}} >
      <Client style={{'position' : 'relative',
        'top': '60px',
        'left': '10px',
        'borderRadius': '40px',
        'width': '600px',
        'height': '500px',
      
        
    
       
      }}>
      
        <b style={{'color' : 'white',
            'font-size': '40px',
            'fontFamily': 'TimesNewRoman',
            'position': 'relative',
            'top': '-200px',
            'left': '130px'

        }}>
            Client
        </b>
       <ImgClient src="/images/online-shopping.png" alt=""/>
      
      </Client>

      </a>
   
      </div>
   {/* <div style={{'background-color': 'black', 'height': '600px', 'width': '140px', 'position': 'absolute', 'top': '0px', 'left': '610px', 'zIndex': '1'}}>
    aw
   </div> */}

    <div>
    <a href='/auth-publisher-sign-in' style={{'cursor': 'pointer'}}>

<Boss style={{'position' : 'absolute',
        'top': '60px',
        'left': '750px',
        'border-radius': '40px',
        'width': '600px',
        'height': '500px',
        
        
  
      }}>

<b style={{'color' : 'white',
            'font-size': '40px',
            'fontFamily': 'TimesNewRoman',
            'position': 'relative',
            'top': '-240px',
            'left': '170px'

        }}>
           Publisher
        </b>
        <ImgPublisher src="/images/shop.png" alt=""/>
      </Boss>
   
</a>
    
      
    </div>


      
    </Container>
  )
}

export default Auth


const ImgClient = styled.img`
position: relative;
top: 180px;
width: 290px;
height: 290px;
right: 50px
`

const ImgPublisher = styled.img`
position: relative;
top: 160px;
width: 340px;
height: 340px;
right: 65px
`


const Client = styled.div`
width: 700px;
height: 500px;
background-color: blue;
`

const Boss = styled.div`
width: 700px;
height: 500px;
background-color: blue;
`
const Container = styled.div`

background-color: blue;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
   height: 633px;
`


{/*     
        <TextField placeholder='Name' style={{'background': 'white', 'width': '300px'}}/>
        
      
   <div>
   <TextField placeholder='Surname'style={{'background': 'white', 'width': '300px'}}/>
   </div>
   <div>
   <TextField placeholder='Email' style={{'background': 'white', 'width': '300px'}}/>
    </div>
    <div>
    <TextField placeholder='Password' style={{'background': 'white', 'width': '300px'}}/>
    </div>
    <div>
    <TextField placeholder='Confirm password' style={{'background': 'white', 'width': '300px'}}/>
    </div>
        
       
      
       
      <GoogleLogin /> */}