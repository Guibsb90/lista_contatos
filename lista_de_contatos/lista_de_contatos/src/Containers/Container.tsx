import React, { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { DivFundo, DivH1, Form, MainContainer, Subtexto } from "./styles"
import { Lista } from "../Componentes/Lista/Lista"
import { cadastrar } from "../store/reducers/contatos"
import Contatos from "../models/Contato"


export const Container = () => {
  const [ nome, setNome ] = useState('')
  const [ tel, setTel ] = useState('')
  const [ email, setEmail ] = useState('')
  const dispatch = useDispatch()

  const cadastrarContato = (evento: FormEvent) =>{
    evento.preventDefault();
    const id = Date.now();
    const contatoParaAdicionar =  new Contatos(nome, email, tel, id )
    dispatch(cadastrar(contatoParaAdicionar))
  }

  return (
    <>    
    <DivH1>Lista de Contatos</DivH1>   
    <MainContainer>
      <DivFundo>
        <Subtexto>Novo contato</Subtexto>
        <Form onSubmit={cadastrarContato}>
          <label htmlFor="nome">Nome</label>
          <input value={nome} onChange={evento => setNome(evento.target.value)} type="text" placeholder="Nome completo" id="nome" />
          <label htmlFor="email">Email</label>
          <input value={email} onChange={evento => setEmail(evento.target.value)} type="email" placeholder="Email" id="email" />
          <label htmlFor="telefone">Telefone</label>
          <input value={tel} onChange={evento => setTel(evento.target.value)} type="tel" placeholder="Telefone" id="telefone" />
          <button type="submit">Adicionar</button>
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