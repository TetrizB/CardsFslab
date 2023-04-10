import Card from "../Card/card"
import fotos from "../Galeria/fotos.json"
import React from 'react'
import Category from "../Category/category"
const categories =[
    "Galáxias",
    "Estrelas",
    "Lua",
    "Nebulosas"
]

function filtercategory(id){
    return fotos.filter(foto=> foto.category === categories[id])
}

export default function categorie() {
  return (
    <Category category={"Galaxias"}>
        {filtercategory(0).map((fotos) => <Card id={fotos.id} key={fotos.imagem}/>)}
    </Category>
  )
}
