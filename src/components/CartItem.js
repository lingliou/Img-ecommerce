import React,{useContext,useState} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'

function CartItem({item}){
    const{removeFromCart} = useContext(Context)
    const[hover, setHover] = useState(false)

    function trashIconClassName(){
        if(hover){
            return "ri-delete-bin-fill"
        }
        else{
            return "ri-delete-bin-line"
        }
    }
    return(
        <div className="cart-item">
            <i className={trashIconClassName()}
                onClick={()=>removeFromCart(item)}
                onMouseEnter={()=> setHover(true)}
                onMouseLeave={()=>setHover(false)}></i>
            <img src={item.url} width="130px" height="73px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.prototype ={
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
