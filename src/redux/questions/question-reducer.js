import { QuestionTypes } from "./question-types"
import { calculateScore } from "./question.utils"
const INITIAL_STATE ={
    questionNo : 0
}

const questionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case QuestionTypes.INCREASE_QUESTION_NO:
            return{
                ...state,
                questionNo : state.questionNo + 1
            }
        default:
            return {...state}
    }
}

export default questionReducer;