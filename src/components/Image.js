import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'

function Image({className,img}){
    const [hovered, setHovered] = useState(false)
    const {toggleFavorited} = useContext(Context)

    function heartIcon(){
        if(img.isFavorite){
            return <i className="ri-heart-fill favorite"
                onClick={()=>{toggleFavorited(img.id)}}></i>
        }
        else if(hovered){
            return <i className="ri-heart-line favorite" 
                onClick={()=>{toggleFavorited(img.id)}}></i>
        }
    }
    
    
    const cartIcon = hovered && 
        <i className="ri-add-circle-line cart"
            ></i>

    return(
        <div 
            className={`${className} image-container`}
            onMouseEnter={()=>setHovered(true)}
            onMouseLeave={()=>setHovered(false)}
        >
            <img src={img.url} className="image-grid" />
            {heartIcon()}
            {cartIcon}
        </div>
            
    )
}

Image.PropTypes = {
    className: PropTypes.string,
    img:PropTypes.shape({
        id:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        isFavorite:PropTypes.bool
    })
}

export default Image