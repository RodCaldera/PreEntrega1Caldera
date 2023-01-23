import React from 'react'
import CartWidget from '../CartWidget/CartWidget'



function NavBar() {
    const Brand = () => {
        return (
          <div>
              <h1>Play</h1>
              <h4>Fun is the new Sexy</h4>
          </div>
        )
      }
    return (
    <>
      <div>
        <Brand />
        
        <ul>
            <li>
               <a>Novedades</a> 
            </li>
            <li>
                <a>Promociones</a>
            </li>
            <li>
                <a>Colección</a>
            </li>
            <li>
                <a>Nosotros</a>
            </li>
            <li>
                <a>Contacto</a>
            </li>
        </ul>
        <CartWidget />
    </div>  
    </>
  )
}

export default NavBar