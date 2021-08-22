import {
    ADD_NEW_PERSON,
    CHANGE_ACTIVE_PERSON, CHANGE_AUTH, CHANGE_EDIT_MODE,
    DELETE_PERSON,
    EDIT_PERSON,
    FETCH_PERSONS,
    SET_PERSON_BY_ID
} from "../typesList";


let idx
let _arr

export const PersonsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PERSONS:
            return {...state, ...action.payload}

        case ADD_NEW_PERSON:

            return {
                ...state, list: [...state.list, action.payload]
            }

        case CHANGE_ACTIVE_PERSON:
            return {...state,  activePerson: action.payload}

        case CHANGE_AUTH:
            return{...state, isAuth:action.payload}

        case DELETE_PERSON:
            idx = state.list.findIndex(p=>p.id===action.payload)
            if (idx === -1) return state
            _arr = [...state.list]
            _arr.splice(idx,1)
            return { ...state,  list: _arr }

        case EDIT_PERSON:

            idx = state.list.findIndex(p=>p.id===action.payload.id)
            if (idx===-1) return state
            _arr = [...state.list]
            _arr.splice(idx, 1, action.payload)
            return {...state, list: _arr}

        case SET_PERSON_BY_ID:
            //idx = state.list.findIndex(p=>p.id===action.payload)
            //if (idx===-1) return {...state,  personById: {}}
            return {...state,  personById: action.payload}

        case CHANGE_EDIT_MODE:
            return {...state,  editMode: !state.editMode}


        default:
            return state
    }
}