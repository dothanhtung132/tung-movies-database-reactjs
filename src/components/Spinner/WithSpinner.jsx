import { CircularProgress } from '@material-ui/core';
import React from 'react';
import './WithSpinner.scss';

// const WithSpinner = (WrappedComponent) => {
//     const Spinner = ({ isLoading, ...otherProps }) => {
//         return (
//             <>
//                 {isLoading ?
//                 <div className='spinner-container'>
//                     <CircularProgress />
//                 </div> 
//                 : null}
//                 <WrappedComponent {...otherProps} />
//             </>
//         );
//     };
//     return Spinner;
// };

const WithSpinner = ({isLoading}) => {
    return (
        <>
            {isLoading ?
            <div className='spinner-container'>
                <CircularProgress />
            </div> 
            : null}
        </>
    );
};
export default WithSpinner;


// isLoading ? 
// (<div className='spinner-container'>
//     <CircularProgress />
// </div>)
// : ''
// (<WrappedComponent {...otherProps} />)
