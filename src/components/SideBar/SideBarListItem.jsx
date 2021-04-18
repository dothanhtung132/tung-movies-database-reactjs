import React, {  } from 'react';
import { useDispatch } from 'react-redux';
import { viewMovieDetail } from '../../redux/actions/movieDetailAction';

const SideBarListItem = ({movie, selected}) => {

    const { Title, Year, Poster } = movie;

    const dispatch = useDispatch();

    // let timeoutId;

    const handleMovieClick = (event) => {
        dispatch(viewMovieDetail(movie));
        // timeoutId = window.setTimeout(() => {
        //     console.log('load movie detail');
        //     dispatch(viewMovieDetail(movie));
        // }, 1500);
    }

    // useEffect(() => {
    //     return () => window.clearTimeout(timeoutId);
    // }, [timeoutId]);

    return (
        <div className={`movie-item ${selected ? 'active' : ''}`} onClick={handleMovieClick}>
            <div
                className='movie-thumbnail'
                style={{
                    backgroundImage: `url(${Poster})`
                }}
            >
            </div>
            <div className='movie-info'>
                <div className='name'>{Title}</div>
                <div className='year'>{Year}</div>
            </div>
        </div>
    );
};

export default SideBarListItem;