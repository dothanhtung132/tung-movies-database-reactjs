import { List, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import './SideBar.scss';
import SideBarListItem from './SideBarListItem';

const useStyles = makeStyles((theme) => ({
  customScrollbar: {
    "&::-webkit-scrollbar": {
      width: 12,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#c4c4c4",
    },
  },
}));

const SideBar = () => {
  const classes = useStyles();

  const data = useSelector(state => state.movies.data);
  const requesting = useSelector(state => state.movies.requesting);

  return (
    <div className='side-bar'>
      {
        requesting ?
        'requesting'
        :
        (data && data.Search && data.Search.length > 0) ?
        <List className={`movie-list ${classes.customScrollbar}`}>
          <div className='search-total-result'>{data.totalResults} RESULTS</div>
          {data.Search.map(({imdbID, ...rest}) => {
            return (<SideBarListItem key={imdbID} {...rest} />);
          })}
        </List>
        :
        <div>no items</div>
      }
    </div>
  );
};

export default SideBar;