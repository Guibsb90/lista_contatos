import React from "react"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"

import { ItemLista} from "../ItemLista/ItemLista"
import { ListaNomes } from "./styles"




export const Lista = () => {

  const { itens } = useSelector((state: RootReducer) => state.contatos )

  return (
    <>
    <ListaNomes>
      {itens.map((m) =>(
        <ItemLista key={m.nome} id={m.id!} nome={m.nome} email={m.email} tel={m.tel} />
      ) )}      
    </ListaNomes>
    </>
  )
}

