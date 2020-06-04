import React from 'react';
import { Image } from 'react-native';

import logoImage from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, ForgotPassword, ForgotPasswordText } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImage} />
      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button>Entrar</Button>

      <ForgotPassword onPress={() => {}}>
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgotPassword>
    </Container>
  );
};

export default SignIn;
