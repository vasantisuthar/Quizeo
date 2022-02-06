import React from "react";

const Questions = ({item, key}) => {
    const {question} = item;
    return ( 
        <div>
            <p>{question}</p>
        </div>
     );
}
 
export default Questions;