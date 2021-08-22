import {
    ADD_NEW_PERSON,
    CHANGE_ACTIVE_PERSON,
    DELETE_PERSON,
    EDIT_PERSON,
    FETCH_PERSONS,
    SET_PERSON_BY_ID,
    CHANGE_AUTH
} from "../typesList";
import personsInitial, {activePersonId, setActivePersonIdToStorage, setPersonsToStorage} from "../../data/persons";
import {URL} from "../utilities";

export const changeActivePersonId = personId => {
    return dispatch => {
        try {
            setActivePersonIdToStorage(personId)
            dispatch(setActivePerson(personId))
        } catch (err) {
            console.log(err.message)
        }

    }
}

export const getPersons = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL}/users`, {
                method:"GET",
                mode:"cors",
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const json = await response.json()
            dispatch(fetchPersons({list:json, activePerson: null}))
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const addNewPerson = data => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL}/auth/signup`, {
                method:"POST",
                mode:"cors",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(data)
            })
            const json = await response.json()
            await dispatch( addPerson(json) )
        } catch (e) {
            console.log(e.message)
        }
    }
}
export const doSignIn = person=>{
    return async dispatch=>{
        try {
            const response = await fetch(`${URL}/auth/signin`, {
                method:"POST",
                mode:"cors",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(person)
            })
            const json = await response.json()
            await localStorage.setItem("token", json.accessToken)
            await localStorage.setItem("userId", json.id)
            await dispatch (changeAuth(true))
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const doSignOut = ()=>{
    return async (dispatch)=>{
       try{
           await localStorage.removeItem("token")
           await localStorage.removeItem("userId")
           await dispatch(changeAuth(false))
       } catch(e){
           console.log(e.message)
       }
    }
}

export const deletePerson = personId => {
    return async dispatch => {
        try {
            await deleteFromServer(personId)
            await dispatch( deletePersonFromState(personId) )
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const editPerson = person => {
    return async dispatch => {
        try {
            //await editPersonInServer(person)
            const response = await fetch(`${URL}/users/${person.id}`, {
                method:"PUT",
                mode:"cors",
                headers:{
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.token
                },
                body:JSON.stringify(person)
            })
            if(response.status!==200){
                return
            }
            const json = await response.json()
            await dispatch(editPersonInState(json))
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const setPersonById = personId => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL}/users/${personId}`, {
                method:"GET",
                mode:"cors",
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const json = await response.json()
            await dispatch( setPersonByIdInState(json) )
        } catch (e) {
            console.log(e.message)
        }
    }
}

const setPersonByIdInState = person => {
    return {
        type: SET_PERSON_BY_ID,
        payload: person
    }
}

const setActivePerson = personId => {
    return {
        type: CHANGE_ACTIVE_PERSON,
        payload: personId
    }
}

const changeAuth= (authMode)=>{
    return{
        type:CHANGE_AUTH,
        payload:authMode
    }
}

const fetchPersons = obj => {
    return {
        type: FETCH_PERSONS,
        payload: obj
    }
}

const addPerson = person => {
    return {
        type: ADD_NEW_PERSON,
        payload: person
    }
}

const editPersonInState = person => {
    return {
        type: EDIT_PERSON,
        payload: person
    }
}



const deletePersonFromState = personId => {
    return {
        type: DELETE_PERSON,
        payload: personId
    }
}


// Server emulations


const createPerson = data => {
    const newPerson = {
        ...data,
        id: Date.now()
    }
    const persons = personsInitial
    persons.push(newPerson)
    setPersonsToStorage(persons)
    return newPerson
}

const editPersonInServer = person => {
    const idx = personsInitial.findIndex(p=>p.id === person.id)
    if (idx === -1) return null
    personsInitial.splice(idx, 1, person)
    setPersonsToStorage(personsInitial)
}

const getObj = () => {
    return {
        list: [...personsInitial],
        activePerson: +activePersonId
    }
}

const deleteFromServer = personId => {
    const idx = personsInitial.findIndex(p=>p.id===personId)
    if (idx === -1) return null
    personsInitial.splice(idx,1)
    setPersonsToStorage(personsInitial)
}