import React from 'react'

function CartWidget() {
    const Count=useState(0)
    return (
    <div>
        <img src="./public/cart"></img> 
        <p> {Count}</p>
    </div>
  )
}

export default CartWidget