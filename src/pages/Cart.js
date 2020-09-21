import React, {useContext} from "react"
import {Context} from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
    const {cartItems} = useContext(Context)
    const cartElement = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
        ))
    const totalPrice = 5.99 * cartItems.length
    const Price= totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartElement}
            <p className="total-cost">Total:{Price} </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart