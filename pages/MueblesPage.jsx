import React from 'react'
import { NavBar } from '../components/NavBar'
import { PintarCategoria } from '../productos/components/PintarCategoria'

export const MueblesPage = () => {
  return (
    <main>
    <div>


    <NavBar/>
    <PintarCategoria categoria={'furniture'}/>
   </div>
   </main>
  )
}