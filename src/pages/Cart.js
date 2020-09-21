import React, {useContext, useState} from "react"
import {Context} from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const cartElement = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
        ))
    const totalPrice = 5.99 * cartItems.length
    const Price= totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const [text, setText] = useState("Place Order")

    function order(){
        setText("Ordering...")
        
        setTimeout(() => {
            console.log("Order placed!")
            setText("Place Orde")
            emptyCart()
        }, 3000)
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartElement}
            <p className="total-cost">Total:{Price} </p>
            <div className="order-button">
            <button onClick={()=>order()}>{text}</button>
            </div>
        </main>
    )
}

export default Cart