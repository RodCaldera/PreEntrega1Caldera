import React from 'react'
import CartWidget from '../CartWidget/CartWidget'



function NavBar() {
    const NavStyle={
      background: "linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9)",
      color: "white",
      padding: "10",
      fontFamily: "Arial",
      textAlign: "center"
    };

    const Brand = () => {
        return (
          <div style={NavStyle}>
              <h1>Play</h1>
              <h4>Fun is the new Sexy</h4>
          </div>
        )
      }
    return (
    <>
      <div>
        <Brand />
        
        <ul style={NavStyle}>
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