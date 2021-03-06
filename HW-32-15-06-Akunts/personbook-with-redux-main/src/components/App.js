import React, {useState, useEffect} from 'react'
//import {connect} from "react-redux"
import Navigation from "./Navigation";
import Pages from "../layouts/Pages";
// import {getPosts} from "../store/actions/posts";
// import {getAlbums} from "../store/actions/albums";
// import {getPhotos} from "../store/actions/photos";

export const GlobalContext = React.createContext(null)

const App = ({initPosts, initAlbums, initPhotos}) => {

    // useEffect(()=>{
    //     initPosts()
    //     initAlbums()
    //     initPhotos()
    // }, [])


    //const [photos, setPhotos] = useState(photosInitial)

    // const addNewPhoto = formData => {
    //     const newPhotos = [...photos, {...formData, id: Date.now(), like: 0, dislike: 0}]
    //     setPhotos(newPhotos)
    //     setPhotosToStorage(newPhotos)
    // }

    // const photoAction = (id, action) => {
    //     const newPhotos = [...photos]
    //     let idx = newPhotos.findIndex( p=>p.id === id)
    //     if (idx ===-1) return null
    //     newPhotos[idx][action]++
    //     setPhotos(newPhotos)
    //     setPhotosToStorage(newPhotos)
    // }



    return (
        <>
            <Navigation/>
            <Pages/>
        </>


    )
}

// const mapDispatchToProps = dispatch => {
//     return {
//         initPosts: () => dispatch(getPosts()),
//         initAlbums: ()=>dispatch(getAlbums()),
//         initPhotos:()=>dispatch(getPhotos())
//     }
// }

//export default connect(null, mapDispatchToProps)(App)
export default App