import React from 'react';
import styled from 'styled-components';
import { auth, provider} from './firebase';

function Login() {

  function signIn() {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      console.log(user);
    }).catch((error) => {
      alert(error.message);
    })
  }
  return (
    <Container>
      <Content>
      <AmazonLogo src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' />
      <h1>Sign in to Amazon</h1>
      <LoginButton
      onClick={signIn}>
      Sign in with Google
      </LoginButton>
      </Content>

    </Container>
  )
}

export default Login

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #f8f8f8;  
display: grid;
place-items: center;
`
const Content = styled.div`
padding: 100px;
background-color: white;
border-radius: 5px;
box-shadow: 0 1px 3px grey;
text-align: center;
`

const AmazonLogo = styled.img`
height: 100px;
margin-bottom: 40px;
`

const LoginButton = styled.button`
margin-top: 50px; 
background-color: #f0c14b;
height: 40px;
border: 2px solid;
border-radius: 4px;
padding: 4px 8px;
cursor: pointer;

`