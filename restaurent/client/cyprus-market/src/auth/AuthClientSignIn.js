import React from 'react'
import styled from 'styled-components'
import {GoogleLogin} from '@react-oauth/google'
import {TextField, Grid, Button} from '@mui/material'



function AuthClient() {
  let signIn = true;
  let signUp = false;
  return (
    <Container>

      
         
          
        <BlocksContainer>
     
     
    
 
            <Grid>
            <TextField placeholder='Email' style={{'position': 'relative','top': '40px', 'backgroundColor':'rgb(120,00,120)', 'width': '400px'}}/>
            </Grid>
            <Grid>
            <TextField placeholder='Password' style={{'position': 'relative','top': '45px', 'backgroundColor': 'rgb(120,00,120)', 'width': '400px'}}/>
            </Grid>
        

     
     
    <Button style={{'background': 'white', 'position': 'relative', 'top': '90px', 'right': '15px', 'width': '215px', 'height': '45px'}}>
    Sign in
    </Button>
       <GoogleLoginMover>
       <GoogleLogin/>
       </GoogleLoginMover>
     <a href='/auth-client-sign-up'  style={{'color': 'white', 'position': 'relative', 'top': '140px', 'right': '10px'}}>Don't have an account? let's sign up</a>
        </BlocksContainer>
          {

          
       
 
      }

    
      
    </Container>
  )
}

export default AuthClient


const Container = styled.div`

background-color: blue;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
   height: 633px;
`

const GoogleLoginMover = styled.div`
position: relative;
 left: 180px;
 bottom: -100px;
 top: 100px;

`

const BlocksContainer = styled.div`
background-color: blue;
position: relative;
top:  80px;
left: 400px;
width: 600px;
height: 480px;
border-radius: 40px;
`