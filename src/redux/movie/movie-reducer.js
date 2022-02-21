import movie_data from "./movie.data";
import { QuestionTypes } from "../questions/question-types";
import { calculateScore } from "../questions/question.utils";
const INITIAL_STATE = {
    collection:movie_data,
    hidden: true,
    score:0
}

const movieReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case QuestionTypes.ADD_SCORE:
            return{
                ...state,
                score: calculateScore(state.score, action.payload)
            }
        case QuestionTypes.SHOW_MODEL:
            return{
                ...state,
                hidden : !state.hidden
            }
        default:
            return {...state}
    }
}

export default movieReducer;
