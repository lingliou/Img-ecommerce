import React, { useContext} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'

function Image({className,img}){
    const [hover, ref] = useHover()
    const {toggleFavorited, addToCart, cartItems, removeFromCart} = useContext(Context)

    function heartIcon(){
        if(img.isFavorite){
            return <i className="ri-heart-fill favorite"
                onClick={()=>{toggleFavorited(img.id)}}></i>
        }
        else if(hover){
            return <i className="ri-heart-line favorite" 
                onClick={()=>{toggleFavorited(img.id)}}></i>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart"
                onClick={()=>{removeFromCart(img)}}></i>
        }
        else if(hover) {    
             return <i className="ri-add-circle-line cart" 
                onClick={() => addToCart(img)}></i>
        }
    }

    return(
        <div 
            className={`${className} image-container`}
            ref={ref}
        >
            <img src={img.url} className="image-grid" alt="description"/>
            {heartIcon()}
            {cartIcon()}
        </div>
            
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img:PropTypes.shape({
        id:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        isFavorite:PropTypes.bool
    })
}

export default Image