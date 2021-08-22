const InitialState = {
    persons: {
        list: [],
        activePerson: null,
        editMode: false,
        personById: null,
        isAuth:localStorage.token ? true : false
    },
    posts: {
        list: [],
        addPostMode: false,
        postById:null
    },
    albums:{
        list:[],
        addAlbumMode:false,
        albumById:null
    },
    photos:{
        list:[],
    }
}

export default InitialState