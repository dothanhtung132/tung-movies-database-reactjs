import { List, makeStyles } from '@material-ui/core';
import React from 'react';
import './SideBar.scss';
import SideBarListItem from './SideBarListItem';

const useStyles = makeStyles((theme) => ({
    root: {
      "&::-webkit-scrollbar": {
        width: 12,
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: 'transparent',
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#c4c4c4",
      },
    },
  }));
  
const SideBar = () => {
    const classes = useStyles();
    return (
        <div className='side-bar'>
            <List className={`movie-list ${classes.root}`}>
                <div className='search-total-result'>582 RESULTS</div>
                <SideBarListItem />
                <SideBarListItem />
                <SideBarListItem />
                <SideBarListItem />
                <SideBarListItem />
                <SideBarListItem />
                <SideBarListItem />
                <SideBarListItem />
                <SideBarListItem />
                <SideBarListItem />
            </List>
        </div>
    );
};

export default SideBar;