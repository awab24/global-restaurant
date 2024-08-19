import React, { useState } from 'react'
import styled from 'styled-components'
import { Grid, TextField, Button } from '@mui/material'
import { GoogleLogin } from '@react-oauth/google'
import {v4 as uuidv4} from 'uuid'
import axios from 'axios'


function AuthClientSignUp() {
  const [signUpData, setSignUpData] = useState({_id: uuidv4(), name: '', surname: '',email:'', password:'', confirmPassword:'' })
  return (
    <Container>
        <BlocksContainer>
          <Grid >
          <TextField placeholder='Name' style={{'position': 'relative','top': '30px', 'backgroundColor': 'rgb(120,30,120)', 'width': '400px',}} onChange={(e) => setSignUpData({...signUpData, name: e.target.value})}/>
          </Grid>
      
          <Grid>
          <TextField placeholder='Surname' style={{'position': 'relative','top': '35px', 'backgroundColor':'rgb(120,00,120)', 'width': '400px'}}  onChange={(e)=> setSignUpData({...signUpData, surname: e.target.value})}/>
              </Grid>

              <Grid>
              <TextField placeholder='Email' style={{'position': 'relative','top': '40px', 'backgroundColor':'rgb(120,00,120)', 'width': '400px'}} onChange={(e) => setSignUpData({...signUpData, email: e.target.value})}/>
              </Grid>

              <Grid>
              <TextField placeholder='Password' style={{'position': 'relative','top': '45px', 'backgroundColor': 'rgb(120,00,120)', 'width': '400px'}} onChange={(e) => setSignUpData({...signUpData, password: e.target.value})}/>
              </Grid>
          
      <Grid>
      <TextField placeholder='Confirm password' style={{'position': 'relative','top': '50px', 'backgroundColor': 'rgb(120,00,120)', 'width': '400px','color': 'white'}} onChange={(e) => setSignUpData({...signUpData, confirmPassword: e.target.value})}/> 
      </Grid>
{
  signUpData.password !== signUpData.confirmPassword? <div style={{'background-color': 'white', 'position': 'relative', 'left': '520px', 'width': '300px', 'height': '65px', 'border-radius': '20px', 'top': '-30px'}}><b style={{'position':'relative', 'top': '20px',}}>passwords aren't the same!</b></div>: <>    
    <Button style={{'background': 'white', 'position': 'relative', 'top': '90px', 'right': '6px', 'width': '230px', 'height': '45px'}} 
  onClick={() => axios.post('http://localhost:5000/api/endpoints/sendClientSignUpData', signUpData)}>
  sign up
  </Button>

     <GoogleLoginMover>
     <GoogleLogin/>
     </GoogleLoginMover></>
}
       


       <a href='/auth-publisher-sign-in' style={{'color': 'white', 'position': 'relative', 'top': '115px', 'right': '10px'}}>Already have an account? Let's sign in</a>
          </BlocksContainer>

    </Container>
  )
}

export default AuthClientSignUp



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
top:  78px;
left: 360px;
width: 600px;
height: 520px;
border-radius: 40px;
`