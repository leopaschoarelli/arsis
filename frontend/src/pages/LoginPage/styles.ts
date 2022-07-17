import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 65%;
  height: 65vh;
`;

export const DivImg = styled.div`
  width: 50%;
  background-color: red;
  height: 100%;
`;

export const DivForm = styled.div`
  width: 50%;
  background-color: green;
  height: 95%;
`;
