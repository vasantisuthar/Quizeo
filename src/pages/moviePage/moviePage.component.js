import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectMovieDataSection } from "../../redux/movie/movieSelector";
import { selectMovieData } from "../../redux/movie/movieSelector";
import Questions from "../../components/questions/questions.component";

const MoviePage = () => {
    const param = useParams();
    const collection = useSelector(selectMovieDataSection(param.categoryId))
    return ( 
        <div>
            <h1>{collection.title}</h1>
            {collection.questions.map(item => <Questions key={item.id} item={item}/>)}
        </div>
     );
}

export default MoviePage;
