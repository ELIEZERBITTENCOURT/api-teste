import React from "react";
import MovieStars from "../MovieStars";
import './style.css'

type Props ={
    score: number;
    count: number;
}

function MovieScore( { score, count }: Props){

    return(
        <div className="score-container">
            <p className="score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score}/>
            <p className="score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;