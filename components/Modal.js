import {useState} from 'react';

function Modal(props){
  
return(
    <div className='modal'>
        <p>Are you sure you want to delete?</p>
        <buton className='btn btn--alt' >Yes, Delete.</buton>
        <button className='btn ' onClick={props.dont}>No, Do not Delete.</button>

    </div>
);
}
export default Modal;