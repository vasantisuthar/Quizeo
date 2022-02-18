import React from "react";

const Questions = ({item, key}) => {
    const {question} = item;
    return ( 
        <div>
            <p>{question}</p>
            <button>Next</button>
        </div>
     );
}
 
export default Questions;