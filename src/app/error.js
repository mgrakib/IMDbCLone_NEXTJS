'use client'
import React from 'react';

const Error = ({ error, reset }) => {
    
    return (
        <div className='flex flex-col items-center justify-center h-full w-full'>
            <p>Someting went wring</p>
            <button onClick={() => reset()}>try again</button>
        </div>
    );
};

export default Error;