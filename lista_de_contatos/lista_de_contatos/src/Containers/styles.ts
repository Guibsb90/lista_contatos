import styled from "styled-components";

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px;
  column-gap: 20px;
  height: 80vh;
  align-items: center;
  justify-content: center;
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  padding: 10px;  

  button{
  margin-top: 24px
  }
`;
export const DivH1 = styled.h1`
  text-align: center;
  margin-top: 40px;
`;

export const DivFundo = styled.div`
  background-color: rgba(200, 200, 200, 0.5);
  height: 30vw;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Subtexto = styled.h2`
  display:block
`;