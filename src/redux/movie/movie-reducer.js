import movie_data from "./movie.data";
import { QuestionTypes } from "../questions/question-types";
import { calculateScore } from "../questions/question.utils";
const INITIAL_STATE = {
    collection:movie_data,
    score:0
}

const movieReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case QuestionTypes.ADD_SCORE:
            return{
                ...state,
                score: calculateScore(state.score, action.payload)
                

            }
        default:
            return {...state}
    }
}

export default movieReducer;
