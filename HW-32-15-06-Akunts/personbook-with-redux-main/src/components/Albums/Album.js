import React, {useEffect} from "react";
import {useParams} from "react-router-dom"
import PhotoCard from "../Photos/PhotoCard";
import { useSelector, useDispatch} from "react-redux";
import {setAlbumById} from "../../store/actions/albums";
import {setPhotosByAlbumId} from "../../store/actions/photos";
import {setPersonById} from "../../store/actions/persons";

const Album = ()=>{

    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setAlbumById(+id))
        dispatch(setPhotosByAlbumId(+id))
    }, [])

    const album = useSelector((state)=>
        state.albums.albumById
    )

    useEffect(()=>{
        if(album){
            dispatch(setPersonById(album.person_id))
        }
    }, [album])


    const person = useSelector((state)=>
        state.persons.personById
    )
    const albumPhotos = useSelector((state)=>
        state.photos.list
    )


    //const data = useSelector((state) => {
        //idx = state.albums.list.findIndex(alb => alb.id === +id)
        //if (idx === -1) return null
       // return state.albums.list[idx]
    //})
    // const person = useSelector((state) => {
    //     if(!album)return null
    //     idx = state.persons.list.findIndex(p => p.id === album.person_id)
    //     if (idx === -1) return null
    //     return state.persons.list[idx]
    // })
    // const albumPhotos=useSelector(state=>{
    //     const photos=state.photos.list.filter(photo=>photo.album_id===+id)
    //     if(!photos.length)return null
    //     return photos
    // })


    const renderAlbum = ()=>{
        if(!album || !person){
            return(<div>Loading...</div>)
        }
        return(
            <div className="container">
                <h1>{album.title}</h1>
                <h2>by {person.l_name} {person.f_name}</h2>
                <div className="row">
                    {albumPhotos.map(photo=><PhotoCard key={photo.id} photo={photo}/>)}
                </div>
            </div>

        )
    }

    return renderAlbum()
}

export default Album