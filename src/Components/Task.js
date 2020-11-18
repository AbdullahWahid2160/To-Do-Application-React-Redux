import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import '../Styles.css';
import { DeleteTask } from '../Redux/index';
import { CompleteTask } from '../Redux/index';

export default function Task(props) {
    const CompletedTask = useSelector(state => state.Tasks)
    const Dispatch = useDispatch();

    const HandleDone = (e, id) => Dispatch(CompleteTask(id))

    const HandleDelete = (e, id) => Dispatch(DeleteTask(id));
    return (
        props !== undefined ? <div
            className="TasksContainer"
            key={props.task.Key}
            style={{ backgroundColor: props.task.Color }}
        >
            <li className="TasksList" id={props.task.Key} >{props.task.Text}</li>
            {props.task.Done === false ? <button className="completed" onClick={(e) => HandleDone(e, props.task.Key)}>
                ✔
      </button> : ""}
            <button className="remove" onClick={(e) => HandleDelete(e, props.task.Key)}>
                ✖
      </button>
        </div>
            :
            null
    );


    // props !== undefined ? 
    //     < div
    // className = "TasksContainer"
    //     // key={props.Key}
    //     // style={{ backgroundColor: props.Color }}
    //     >
    //     {/* key={props.key} */ }
    // {/* {props.Text} */ }
    // <li className="TasksList" >Task</li>
    // {/* {props.Done === false ?  */ }
    // <button className="completed" >
    //     {/* onClick={HandleDone} */}
    //             ✔
    //   </button>
    // {/* : ""} */ }
    // <button className="remove" >
    //     {/* onClick={HandleDelete} */}
    //             ✖
    //   </button>
    // </div >
    // :
    // null
}

