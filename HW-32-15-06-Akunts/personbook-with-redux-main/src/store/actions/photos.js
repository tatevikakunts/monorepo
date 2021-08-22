import photosInitial, {setPhotosToStorage} from "../../data/photos";
import {ADD_PHOTO, ADD_REACTION, FETCH_PHOTOS} from "../typesList";
import {URL} from "../utilities";


export const getPhotos = ()=>{
    return async dispatch =>{
        try{
            const response = await fetch(`${URL}/photos`, {
                method:"GET",
                mode:"cors",
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const json = await response.json()
            //const pic = getPic()
            await dispatch(fetchPhotos({list:json}))
        }catch(e){
            console.log(e.message)
        }
    }
}

export const addPhoto = photo =>{
    return async dispatch=>{
        try{
            const response = await fetch(`${URL}/photos`, {
                method:"POST",
                mode:"cors",
                headers:{
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.token
                },
                body:JSON.stringify(photo)
            })
            const json = await response.json()
            //const newPhoto = await addPhotoOnServer(photo)
            await dispatch(addPhotoInState(json))
        }catch(e){
            console.log(e.message)
        }
    }
}

export const addPhotoReaction =(id,reaction)=>{
    return async (dispatch, getState)=>{
        const photo = getState().photos.list.find((photo)=>photo.id === id)
        const obj = {}
        obj["reaction"]=photo[reaction] + 1
        try{
            const response = await fetch(`${URL}/photos/${photo.id}`, {
                method:"PUT",
                mode:"cors",
                headers:{
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.token
                },
                body:JSON.stringify(obj)
            })
            if(response.status!==200){
                return
            }
            const data = await response.json()
            //const photoReaction = await addReactionOnServer(id, reaction)
            await dispatch(setReactionToState(data))
        }catch(e){
            console.log(e)
        }
    }
}
export const setPhotosByAlbumId = (albumId)=>{
    return async dispatch =>{
        try{
            const response = await fetch(`${URL}/photos/album_id/${albumId}`, {
                method:"GET",
                mode:"cors",
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const json = await response.json()
            await dispatch(fetchPhotos({list:json}))
        }catch(e){
            console.log(e.message)
        }
    }
}

const fetchPhotos = data=>{
    return{
        type:FETCH_PHOTOS,
        payload:data
    }
}
const addPhotoInState = photo=>{
    return{
        type:ADD_PHOTO,
        payload:photo
    }
}
const setReactionToState = photo=>{
    return{
        type:ADD_REACTION,
        payload:photo
    }
}

//server side
const getPic = ()=>{
    return{
        list:[...photosInitial]
    }
}
const addPhotoOnServer = photo=>{
    const newPhoto={
        ...photo, id:Date.now(), like:0, dislike:0
    }
    photosInitial.push(newPhoto)
    setPhotosToStorage(photosInitial)
    return newPhoto
}

const addReactionOnServer = (id, reaction)=>{
    const newPhotos = [...photosInitial]
    const idx = newPhotos.findIndex(p=>p.id===id)
    if (idx===-1) return null
    newPhotos[idx][reaction]++
    setPhotosToStorage(newPhotos)
    return newPhotos[idx]
}