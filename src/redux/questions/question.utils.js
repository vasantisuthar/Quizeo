
export const calculateScore = (score, answer) =>{
    // eslint-disable-next-line eqeqeq
    if(answer.answer == answer.correct){
        score = score + 1
        return score;
    }else if(answer.answer != answer.correct){
        return score-1;
    }else{
        return score;
    }

    
}