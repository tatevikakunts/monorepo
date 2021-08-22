import {ADD_PHOTO, FETCH_PHOTOS, ADD_REACTION} from "../typesList";


export const PhotosReducer = (state={}, action)=>{
    switch(action.type){
        case ADD_PHOTO:
            return{...state, list:[...state.list, action.payload]}
        case FETCH_PHOTOS:
            return{...state, ...action.payload}
        case ADD_REACTION:
            const idx = state.list.findIndex(p=>p.id===action.payload.id)
            if (idx===-1) return state
            const _arr = [...state.list]
            _arr.splice(idx, 1, action.payload)
            return{...state, list:_arr }


        default:
            return state
    }

}