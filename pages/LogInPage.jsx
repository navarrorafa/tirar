import React from 'react'

import { useFormulario } from '../hooks/useFormulario'


export const LogInPage = () => {

   const { handleSubmit}=useFormulario()
  return (
    <> 
          <form onSubmit={handleSubmit} action="">

              <input
                  type="text"
                  name='nombre'
                  id='nombre'
                  placeholder='NOMBRE USUARIO' />
              <input type="submit" value='Login' />


          </form>

          
          </>

  )
}
