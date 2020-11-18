import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Task from './Task';
import '../Styles.css';

export default function CompletedTask() {
    const Tasks = useSelector(state => state.Tasks);
    console.log("CompletedTask main Tasks from redux store : ", Tasks);
    return (
        <div>
            <p
                className="ToDoHeading"
                style={{
                    visibility: 'visible',
                }}
            >
                {Tasks.some(task => task.Done === true) ?
                    'Completed Tasks...' : ''}
            </p>
            <ul className="ToDoUnorderedlist">
                <div className="to-do-list-flexbox" key={Tasks.Key}>
                    {Tasks && Tasks
                        .filter(task => task.Done === true)
                        .map((item) => <Task task={item} />)
                    }
                </div>
            </ul>
        </div>
    );

}
