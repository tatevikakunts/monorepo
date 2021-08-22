import React from "react";
import {connect} from "react-redux";
import {addPhotoReaction} from "../../store/actions/photos";


const LikeDislike = ({
                         //photo,
                         id,  photoAction, reaction })=>{

    return(
        <div>
            <button onClick={(event)=>photoAction(id, reaction)} >{reaction} </button>
        </div>

    )
}
const mapDispatchToProps= dispatch=>{
    return{
        photoAction: (id, reaction)=>dispatch(addPhotoReaction(id, reaction))
    }
}


export default connect (null, mapDispatchToProps) (LikeDislike)