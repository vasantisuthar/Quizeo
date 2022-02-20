import { QuestionTypes } from "./question-types";

export const increaseQuestionNo = () =>({
    type:QuestionTypes.INCREASE_QUESTION_NO
})

export const addScore = (answer) => ({
    type:QuestionTypes.ADD_SCORE,
    payload : answer
})