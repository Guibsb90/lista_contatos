import React from "react"
import { DivFundo, DivH1, Form, MainContainer, Subtexto } from "./styles"
import { Lista } from "../Componentes/Lista/Lista"



export const Container = () => {

  return (
    <>    
    <DivH1>Lista de Contatos</DivH1>   
    <MainContainer>
      <DivFundo>
        <Subtexto>Novo contato</Subtexto>
        <Form>
          <label htmlFor="nome">Nome</label>
          <input type="text" placeholder="Nome completo" id="nome" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" id="email" />
          <label htmlFor="telefone">Telefone</label>
          <input type="tel" placeholder="Telefone" id="telefone" />
          <button type="button">Adicionar</button>
        </Form>
      </DivFundo>
      <DivFundo>
        <Subtexto>Contatos</Subtexto>
        <Lista />
      </DivFundo>
    </MainContainer>
    </>
  )
}