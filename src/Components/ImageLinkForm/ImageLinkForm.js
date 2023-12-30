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
            <p>
                {'Here are some sample URLs of Images of random celebrities, Feel free to copy and paste it in the search-box'}
            </p>
                <ol>
                    <li>https://malevus.com/wp-content/uploads/2022/09/einstein.jpeg</li> 
                    <li>https://assets.capitalxtra.com/2021/05/how-to-you-pronounce-zendaya-1612366633-view-1.jpg</li>
                    <li>https://www.telegraph.co.uk/multimedia/archive/03171/mr_bean_edit_3171783b.jpg?imwidth=680</li>
                </ol>
                </div>

            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onKeyDown={autoSubmit}  onChange={onInputChange} />
                    <button className='w-30 grow f4 link pv2 dib white bg-light-purple' onClick={onButtonSubmit}>detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;