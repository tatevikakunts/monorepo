import React, {Fragment, useEffect} from "react"
import {useParams} from 'react-router-dom'
import {connect, useDispatch} from "react-redux"
import AddAlbum from "../Albums/AddAlbum"
import PersonalAlbums from "../Albums/PersonalAlbums"
import AddPost from "../Posts/AddPost"
import PersonalBlog from "../Posts/PersonalBlog"
import {editPerson, setPersonById} from "../../store/actions/persons";
import EditPersonForm from "./EditPersonForm";
import {CHANGE_ADD_ALBUM_MODE, CHANGE_ADD_POST, CHANGE_EDIT_MODE} from "../../store/typesList";
import {setAlbumsByPersonId} from "../../store/actions/albums";
import {setPostsByPersonId} from "../../store/actions/posts";

const PersonProfile = ({editMode, setEditMode, person, addPostMode, setAddPostMode, addAlbumMode, setAddAlbumMode}) => {

    const {id} = useParams()

    const activePerson = +localStorage.userId

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPersonById(+id))
        dispatch(setAlbumsByPersonId(+id))
        dispatch(setPostsByPersonId(+id))

    }, []);

    useEffect(() => {
        setPersonById(+id)
    }, [editMode]);


    const renderProfile = () => {
        if (!person) return false
        return (
            <div className="container">
                <div className="card w-100">
                    {editMode ? renderForm() : renderInfo()}
                </div>
                {renderEditButton()}
            </div>
        )
    }



    const renderForm = () => {
        return (
            <EditPersonForm person={person} />
        )
    }

    const renderInfo = () => {
        return (
            <Fragment>
                <img src={person.avatar} className="card-img-top" alt="{person.f_name} {person.l_name}"/>
                <div className="card-body">
                    <h3 className="card-title">
                        {person.f_name} {person.l_name}
                    </h3>
                    <div className="card-text">
                        <p>{person.age}</p>
                        <p>{person.phone}</p>
                        <p>{person.email}</p>
                    </div>
                </div>
            </Fragment>
        )
    }



    const renderEditButton = () => {
        if (activePerson !== person.id || editMode || addAlbumMode || addPostMode) return null
        return (
            <div className="w-100">
                <button onClick={editButtonHandle} className="w-100 btn btn-success my-2">Edit</button>
                <button onClick={addAlbumButtonHandle} className="w-100 btn btn-info mb-2">Add Album</button>
                <button onClick={addPostButtonHandle} className="w-100 btn btn-info mb-2">Add Post</button>
            </div>
        )
    }

    const editButtonHandle = event => {
        event.preventDefault()
        setEditMode()
    }

    const addAlbumButtonHandle = event => {
        event.preventDefault()
        setAddAlbumMode()
    }

    const addPostButtonHandle = event => {
        event.preventDefault()
        setAddPostMode()
    }


    const renderPersonInfo = () => {

        if (addAlbumMode) {
            return (<AddAlbum  activePerson={activePerson}/>)
        }
        if (addPostMode) {
            return <AddPost activePerson={activePerson}/>;
        }
        if (editMode) {
            return null
        }

        return (<div>
            <PersonalAlbums personId={+id}/>
            <PersonalBlog personId={+id}/>
        </div>)

    }

    return (
        <section className="container">
            <div className="row">
                <div className="col-6 col-sm-4">
                    {renderProfile()}
                </div>
                <div className="col-6 col-sm-8">
                    {renderPersonInfo()}
                </div>
            </div>

        </section>
    )
}

const mapStateToProps = state => {
    return {
        //activePerson: +state.persons.activePerson,
        person: state.persons.personById,
        editMode: state.persons.editMode,
        addPostMode: state.posts.addPostMode,
        addAlbumMode: state.albums.addAlbumMode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //editLocalPerson: person => dispatch(editPerson(person)),
        //setLocalPerson: id => dispatch(setPersonById(id)),
        setEditMode: () => dispatch({type: CHANGE_EDIT_MODE}),
        setAddPostMode: () => dispatch({type: CHANGE_ADD_POST}),
        setAddAlbumMode:()=>dispatch({type:CHANGE_ADD_ALBUM_MODE})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonProfile)