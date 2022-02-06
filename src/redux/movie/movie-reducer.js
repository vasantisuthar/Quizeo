import movie_data from "./movie.data";

const INITIAL_STATE = {
    collection:movie_data
}

const movieReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        default:
            return {...state}
    }
}

export default movieReducer;
