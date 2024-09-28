import React from "react"
import { ItemLista} from "../ItemLista/ItemLista"
import { ListaNomes } from "./styles"

const Contatos = [
  {
    nome: 'João José',
    email: 'jj@jj.com',
    tel: 444444444
  },
  {
    nome: 'João José',
    email: 'jj@jj.com',
    tel: 444444444
  },
  {
    nome: 'João Jesus',
    email: 'jj@jj.com',
    tel: 444444444
  },
  {
    nome: 'João Jaco',
    email: 'jj@jj.com',
    tel: 444444444
  }
]

export const Lista = () => {

  return (
    <>
    <ListaNomes>
      {Contatos.map((m) =>(
        <ItemLista key={m.nome} nome={m.nome} email={m.email} tel={m.tel} />
      ) )}      
    </ListaNomes>
    </>
  )
}

