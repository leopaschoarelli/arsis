import React from 'react';
import { Container, MainContent, DivImg, DivForm } from './styles';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <MainContent>
        <DivImg>
          <h1>IMAGEM</h1>
        </DivImg>
        <DivForm>
          <h1>Formulário</h1>
        </DivForm>
      </MainContent>
    </Container>
  );
};

export default LoginPage;
