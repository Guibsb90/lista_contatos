import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import Contatos from "../../models/Contato";

const contatosSlice = createSlice({
  name: 'contatos',
  initialState:{
    itens: [
      new Contatos('Teste', 'eu@eu.eu','33333333'),
      new Contatos('Teste1', 'e1u@eu.eu','33233333'),
      new Contatos('Teste2', 'e3u@eu.eu','33433333'),
      new Contatos('Teste3', 'e2u@eu.eu','33533333')
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<string>) => {
      state.itens = state.itens.filter(contato => contato.nome !== action.payload)
    },
    editar: (state, action: PayloadAction<Contatos>) =>{
      const indexDoContato = state.itens.findIndex(c => c.nome === action.payload.nome)
      if (indexDoContato >= 0){
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contatos>) =>{
      const contatoJaExiste = state.itens.find(contatos => contatos.nome.toLowerCase() === action.payload.nome.toLowerCase()
    ) 
    if (contatoJaExiste){
      alert("Contato já existente")
    } else {state.itens.push(action.payload)}
    }

  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer