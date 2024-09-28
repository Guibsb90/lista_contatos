import styled from "styled-components";

export const ListaNomes = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  padding: 0;

  button {
    margin: 8px 8px 0 8px; 
  }
  textarea{
  resize:none;
  height: 16px;
  background-color: transparent;
  border: none;
  text-align: center;
  align-items: center;
  
  }
`;