import React from 'react';
import {ReactComponent as Arrow} from '../../assets/img/arrow.svg';
import { MoviePage } from '../../types/movie';
import './style.css';

type Props={
    page: MoviePage;
    onChange: Function;
}

function Pagination( { page, onChange }: Props ){
    
    return(
        <div className="pagination-container">
            <div className="pagination-box">
                <button className="pagination-button" disabled={page.first} onClick={() => onChange(page.number - 1)}>
                    <Arrow />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="pagination-button" disabled={page.last} onClick={() => onChange(page.number + 1)}>
                    <Arrow className="flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;