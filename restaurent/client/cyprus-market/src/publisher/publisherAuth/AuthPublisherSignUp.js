// AuthPublisherSignUp.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, TextField, Button } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function AuthPublisherSignUp() {
    const [signUpData, setSignUpData] = useState({ _id: uuidv4(), marketName: '', picture: null, email: '', password: '', confirmPassword: '' });

    const onSignUp = async () => {
        try {
            const formData = new FormData();
            formData.append('marketName', signUpData.marketName);
            formData.append('picture', signUpData.picture);
            formData.append('email', signUpData.email);
            formData.append('password', signUpData.password);
            formData.append('confirmPassword', signUpData.confirmPassword);

            console.log('FormData to be sent:');
            formData.forEach((value, key) => {
                console.log(key, value);
            });

            await axios.post('http://localhost:5000/api/endpoints/insertPic', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('SignUpData to be sent:', signUpData);
            await axios.post('http://localhost:5000/api/endpoints/sendPublisherSignUpData', signUpData);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Container>
            <BlocksContainer>
                <Grid>
                    <TextField
                        placeholder="Name"
                        style={{ position: 'relative', top: '30px', backgroundColor: 'rgb(120,30,120)', width: '400px' }}
                        onChange={(e) => setSignUpData({ ...signUpData, marketName: e.target.value })}
                    />
                </Grid>

                <input
                    type="file"
                    style={{ position: 'relative', zIndex: '1', right: '80px', bottom: '-275px', borderRadius: '10px', cursor: 'pointer' }}
                    onChange={(e) => setSignUpData({ ...signUpData, picture: e.target.files[0] })}
                />
                {signUpData.picture && <img src={URL.createObjectURL(signUpData.picture)} alt="" />}

                <div style={{ position: 'relative', top: '250px', backgroundColor: 'rgb(120,30,120)', width: '220px', height: '30px', left: '280px' }}>
                    profile picture
                </div>

                <Grid>
                    <TextField
                        placeholder="Email"
                        style={{ position: 'relative', top: '40px', backgroundColor: 'rgb(120,00,120)', width: '400px' }}
                        onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                    />
                </Grid>

                <Grid>
                    <TextField
                        placeholder="Password"
                        style={{ position: 'relative', top: '45px', backgroundColor: 'rgb(120,00,120)', width: '400px' }}
                        onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                    />
                </Grid>

                <Grid>
                    <TextField
                        placeholder="Confirm password"
                        style={{ position: 'relative', top: '50px', backgroundColor: 'rgb(120,00,120)', width: '400px', color: 'white' }}
                        onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
                    />
                </Grid>

                {signUpData.password !== signUpData.confirmPassword ? (
                    <div style={{ backgroundColor: 'white', position: 'relative', left: '520px', width: '300px', height: '65px', borderRadius: '20px', top: '-30px' }}>
                        <b style={{ position: 'relative', top: '20px' }}>passwords aren't the same!</b>
                    </div>
                ) : (
                    <>
                        <Button
                            style={{ background: 'white', position: 'relative', top: '90px', right: '6px', width: '230px', height: '45px' }}
                            onClick={onSignUp}
                        >
                            sign up
                        </Button>

                        <GoogleLoginMover>
                            <GoogleLogin />
                        </GoogleLoginMover>
                    </>
                )}

                <a href="/auth-publisher-sign-in" style={{ color: 'white', position: 'relative', top: '115px', right: '10px' }}>
                    Already have an account? Let's sign in
                </a>
            </BlocksContainer>
        </Container>
    );
}

export default AuthPublisherSignUp;

const Container = styled.div`
  background-color: blue;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
  height: 633px;
`;

const GoogleLoginMover = styled.div`
  position: relative;
  left: 180px;
  bottom: -100px;
  top: 100px;
`;

const BlocksContainer = styled.div`
  background-color: blue;
  position: relative;
  top: 78px;
  left: 360px;
  width: 600px;
  height: 520px;
  border-radius: 40px;
`;
