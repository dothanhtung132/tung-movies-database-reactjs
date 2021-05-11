import { CircularProgress } from '@material-ui/core';
import React from 'react';
import './WithSpinner.scss';

const WithSpinner = (WrappedComponent) => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <div className='spinner-container'>
                <CircularProgress />
            </div>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
    return Spinner;
};

export default WithSpinner;