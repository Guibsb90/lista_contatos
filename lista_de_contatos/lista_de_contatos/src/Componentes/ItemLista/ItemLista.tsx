import React, { useState } from "react"
import { Item } from "./styles"

type Props = {
  nome: string
  email: string
  tel: number
}

export const ItemLista = ({email, nome, tel}:Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    
      <Item>
        <div> Nome: <textarea value={nome} name="nome" id="nome">{nome}</textarea> </div>
        <div> E-mail: <textarea value={email} name="email" id="email">{email}</textarea></div>
        <div> Telefone: <textarea value={tel} name="tel" id="tel">{tel}</textarea></div>
        {estaEditando ? (
          <>
          <button>Salvar</button>
          <button onClick={() => setEstaEditando(false)}>Cancelar</button>
          </>
        ): (
          <>
          <button onClick={() => setEstaEditando(true)} >Editar</button>
          <button>Excluir</button>
          </>
        )}
      </Item>  
    
  )
}

