import React from 'react';
function Rank({ name, entries }) {
    return (
        <div>
            <div className='white f3'>
                {`Hi there, ${name}, Your face detection count is...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;