import React, {useContext} from "react"
import Image from '../components/Image'
import {getClass} from '../utils/index'

import {Context} from '../Context'

function Photos() {
    const {photos} =useContext(Context)
    const imgElement = photos.map((img,index) => (
        <Image key={img.id} img={img} className={getClass(index)}/>
    ))

    return (
        <main className="photos">
            {imgElement}
            
        </main>
    )
}

export default Photos