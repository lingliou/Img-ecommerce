import React,{useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider(props) {
    const [photos, setPhotos] = useState([])

    useEffect( ()=>{
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(response => response.json())
        .then(data => setPhotos(data))
    } , [])
    // data example:
    // [{
    //     "url": "https://github.com/bobziroll/scrimba-react-bootcamp-images/blob/master/pic1.jpg?raw=true",
    //     "id": "1",
    //     "isFavorite": false
    // },
    //     ...
    // ]

    function toggleFavorited(id){
        const updatedPhotos = photos.map(img => {
            if(img.id === id){
                return{
                    ...img,
                    isFavorite : !img.isFavorite  
                }
            }
            else{
                return img
            }
        })

        setPhotos(updatedPhotos)

    }

    return(
        <Context.Provider value={{photos, toggleFavorited}}>
            {props.children}
        </Context.Provider>
    )
}

export{ContextProvider, Context}