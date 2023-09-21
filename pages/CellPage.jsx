import React from 'react'
import { NavBar } from '../components/NavBar'
import { PintarCategoria } from '../productos/components/PintarCategoria'

export const CellPage = () => {
  return (
    <main>
    <div>


    <NavBar/>
    <PintarCategoria categoria={"smartphones"}/>
   </div>
   </main>

  )
}