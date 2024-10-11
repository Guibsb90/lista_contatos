import { useDispatch } from "react-redux"
import React, { useEffect, useState } from "react"

import { Item } from "./styles"
import { remover, editar } from "../../store/reducers/contatos"
import Contatos from "../../models/Contato"

type Props = Contatos & {id: number};

export const ItemLista = ({email: emailOriginal, nome: nomeOriginal, tel: telOriginal, id}:Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState(nomeOriginal || '')
  const [tel, setTel] = useState(telOriginal || '')
  const [email, setEmail] = useState(emailOriginal || '')

  useEffect(() => {
    if(nomeOriginal.length > 0){
      setNome(nomeOriginal)
    }
  },[nomeOriginal])

  function cancelaEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTel(telOriginal)
  }
  return (
    
      <Item>
        <div> Nome: <textarea disabled={!estaEditando} onChange={evento => setNome(evento.target.value)} value={nome} name="nome" id="nome">{nome}</textarea> </div>
        <div> E-mail: <textarea disabled={!estaEditando} onChange={evento => setEmail(evento.target.value)} value={email} name="email" id="email">{email}</textarea></div>
        <div> Telefone: <textarea disabled={!estaEditando} onChange={evento => setTel(evento.target.value)} value={tel} name="tel" id="tel">{tel}</textarea></div>
        {estaEditando ? (
          <>
          <button onClick={() => dispatch(editar({
            nome, 
            email,
            tel
          }), setEstaEditando(false)) }>Salvar</button>
          <button onClick={() => {
          cancelaEdicao()
          }}>Cancelar</button>
          </>
        ): (
          <>
          <button onClick={() => setEstaEditando(true)} >Editar</button>
          <button onClick={()=> dispatch(remover(id))}>Excluir</button>
          </>
        )}
      </Item>  
    
  )
}

