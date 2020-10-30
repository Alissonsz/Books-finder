import React from 'react';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';
import {
  Container
} from './styles';

const LoginPage = () => {
  return(
    <>
      <Header />
      <Container>
        <LoginForm />
      </Container>
    </>
  )
}

export default LoginPage;