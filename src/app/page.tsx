"use client"

import { useState } from "react"
import { TypeDeLista } from "./tipos/TypesDeLista"

export default function page (){
const [list, setList] = useState<TypeDeLista[]>([
  
])
const [itemInput, setItemInput] = useState('')

function addItemNaLista (){
  if(itemInput.trim() === '') return
  setList([
    ...list, {id: list.length, label: itemInput, checked: false}
  ])
  setItemInput('')
}

function deletar (id:number){
  let arrayNovo = list.filter(item => item.id !== id);
  setList(arrayNovo);
}

function verificaCheckbox (id:number){
  let arrayCheck = [...list];
  for(let i in arrayCheck){
    if(arrayCheck[i].id === id){
      arrayCheck[i].checked = !arrayCheck[i].checked
    }
  }

  setList(arrayCheck);
}


  return (
    <div className="container mx-auto">
      <h1 className="text-3xl bg-gradient-to-r from-sky-500 opacity-50 p-4 to-stone-950 w-max mt-28 text-white rounded-xl font-bold ">Lista de Tarefas</h1>

      <div className=" bg-gradient-to-r from-sky-700 to-stone-950 mb-64 mt-10  rounded-xl flex gap-8 p-4">
        <div className="input rounded-xl bg-white h-full w-96 p-4 flex flex-col gap-4">
          <input placeholder="Ex: Dormir" value={itemInput} onChange={(e) => setItemInput(e.target.value)} type="text" className="bg-sky-900 rounded-xl h-16 p-2 font-bold outline outline-2 outline-offset-2 outline-sky-700 ease-out ringsky-fuchsia-800 text-2xl w-full" />

          <button onClick={addItemNaLista} className="bg-sky-500 font-bold rounded-xl p-3 text-xl text-gray-800">Enviar</button>

          <div className="h-full bg-sky-400 rounded-xl p-3 outline outline-offset-2 outline-sky-500 flex flex-col items-center gap-6">
            <p className="text-center text-2xl text-gray-900 font-bold">Itens na Lista: </p>
            <h3 className="text-3xl bg-sky-300 p-10 rounded-xl px-12 font-bold text-black">{list.length}</h3>
          </div>
        </div>

        <div className="bg-gradient-to-r from-white to-sky-950 rounded-xl p-3 w-full">
          <ul className="text-black  p-3 flex flex-col gap-4">
            {list.map(item => (

              <li key={item.id} className="capitalize text-xl font-bold text-gray-900 flex items-center bg-gradient-to-r from-gray-300 to-sky-700 rounded-xl p-3 justify-between"> 
              
              <div className="flex gap-2 items-center">
                <span className="outline outline-offset-2 sky-fuchsia-500 p-3 text-xl font-bold bg-sky-500 rounded-full h-10 flex justify-center items-center w-10 mr-4">
                {item.id + 1}</span>
                <input onClick={() => verificaCheckbox(item.id)} type="checkbox" checked={item.checked} className="w-6 h-6 rounded-full"/> 
              </div>
              
              {item.label}
             
              <button onClick={() => deletar(item.id)} className="text-white bg-black rounded-xl p-2">[ deletar ]</button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}