import React from 'react'
import {NavLink, useHistory} from "react-router-dom";
//import SelectActivePerson from "./Persons/SelectActivePerson";
import {connect, useSelector} from "react-redux";
import {doSignOut} from "../store/actions/persons"

const Navigation = ({ signOut}) => {

    const isAuth = useSelector(state => {
        return state.persons.isAuth
    })

    let history = useHistory()

    const renderAuth = ()=>{
        if(!isAuth){
            return(<>
                    <li className="nav-item">
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/signin">Sign In</NavLink>
                    </li>
                </>

            )
        }else{
            return(
                <li className="nav-item">
                    <a href="#" className="nav-link" onClick={async (event)=>{
                    event.preventDefault()
                        await signOut()
                        history.push("/")
                    }
                    }>Sign Out</a>
                </li>
            )
        }
    }
    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary mb-3">
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink exact={true} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact={true} to="/persons">All Persons</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/albums">Albums</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/posts">Posts</NavLink>
                    </li>
                    {renderAuth()}

                </ul>
            </div>
        </nav>
    )
}
const mapStateToProps = state=>{
    return{
        isAuth:state.persons.isAuth
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        signOut:()=>dispatch(doSignOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Navigation)