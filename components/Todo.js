
import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props){
 const  [modalisopen, setmodalisopen]=useState(false)
    function deleteaction(){
        console.log('clicked')
        console.log(props.text)
        setmodalisopen(true)
    }

    function backcancel(){
      console.log('backdrop cancel clicked!')
      setmodalisopen(false)
    }
return(
    <div className="card">
        <h3 className="titl"> {props.text}</h3>
        <h4 className="desc" >{props.desc}</h4>
        <div className="actions">
          <button className="btn" onClick={deleteaction}>Delete</button>
          {modalisopen && <Modal dont={backcancel}/>}
          {modalisopen && <Backdrop cancel={backcancel} />}
        </div>
      </div>
);

}

export default Todo;