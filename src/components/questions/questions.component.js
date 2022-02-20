import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuestionNo } from "../../redux/questions/questions-action";

const Questions = (collection) => {
    const counter = useSelector((state) => state.question.questionNo);
    const dispatch = useDispatch();
    return ( 
        <div className="flex flex-col justify-center items-center mx-9">
            {Object.keys(collection).map((item,i) => (
                <div className="text-center w-3/4">
                    <p className="text-center text-4xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block"><span className="relative text-white">{collection[item].title}</span></p>
                    <div className="bg-white mt-8 rounded-xl">
                        <p className="text-2xl text-indigo-900 py-12 font-semibold">{counter + 1}.{collection[item].questions[counter].question}</p>
                        <div className="text-center">
                            {Object.keys(collection[item].questions[counter].options).map((option, i) =>(
                                <button className="text-white bg-white py-2 w-72 font-medium uppercase p-4 text-lg rounded-full m-4 bg-blue-500 shadow-lg shadow-cyan-500/50 ... hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 ...">
                                {collection[item].questions[counter].options[option]}
                                </button>
                            ))}
                            <br></br>
                            {counter === collection[item].questions.length-1 ?  <button className="m-7 bg-green-500 w-36 rounded-lg font-medium p-2" >submit</button> :
                    
                            <button type="button" className="m-7 bg-green-500 w-36 rounded-lg font-medium p-2" onClick={() => dispatch(increaseQuestionNo())}>Next</button>}
                        </div>
                    </div>

                </div>

            ))}
            
        </div>
    );
}


export default Questions;