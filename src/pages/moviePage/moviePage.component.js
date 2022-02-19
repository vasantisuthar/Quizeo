import React from "react";
import _ from 'lodash';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectMovieDataSection } from "../../redux/movie/movieSelector";
import Questions from "../../components/questions/questions.component";

const MoviePage = () => {
    const param = useParams();
    const collection = useSelector(selectMovieDataSection(param.categoryId))
    return ( 
        <div>
            <Questions collection={collection} />
        </div>
     );
}

export default MoviePage;
