import React from 'react';
import './ImageLinkForm.css'

function ImageLinkForm({ onInputChange, onButtonSubmit }) {
    const autoSubmit = (key) => {
        if (key.keyCode === 13) {
            onButtonSubmit();
        }
    }

    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your picture, give it a try'}
            </p>
            <div className='shallipopi'>
            <p>{`Here is a sample URL, copy and paste it in the search box`}</p>
              <p> {`https://assets.capitalxtra.com/2021/05/how-to-you-pronounce-zendaya-1612366633-view-1.jpg`} </p> 
            </div>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onKeyDown={autoSubmit} onChange={onInputChange} />
                    <button className='w-30 grow f4 link pv2 dib white bg-light-purple' onClick={onButtonSubmit}>detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;