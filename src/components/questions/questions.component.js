import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuestionNo } from "../../redux/questions/questions-action";

const Questions = (collection) => {
    const counter = useSelector((state) => state.question);
    const dispatch = useDispatch();
    const questionNo = counter.questionNo;
    return ( 
        <div>
            {Object.keys(collection).map((item,i) => (

                <div>
                    <h1>{collection[item].title}</h1>
                    <p>{collection[item].questions[questionNo].question}</p>
                    {Object.keys(collection[item].questions[questionNo].options).map((option, i) =>(
                        <button><span className="p-3">{i+1}.</span>{collection[item].questions[questionNo].options[option]}</button>
                    ))}
                </div>
            ))}

            <button type="button" onClick={() => dispatch(increaseQuestionNo())}>Next</button>
        </div>
    );
}


export default Questions;