import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Task from './Task';
import '../Styles.css';

export default function PendingTask() {
    const Tasks = useSelector(state => state.Tasks);
    console.log("PendingTask main Tasks from redux store : ", Tasks);
    return (
        <div>
            <p
                className="ToDoHeading"
                style={{
                    visibility: 'visible',
                }}
            >
                {Tasks.some(task => task.Done === false) ?
                    'Pending Tasks...' : ''}
            </p>
            <ul className="ToDoUnorderedlist">
                <div className="to-do-list-flexbox" key={Tasks.Key}>
                    {Tasks && Tasks
                        .filter(task => task.Done === false)
                        .map((item) => <Task task={item} />)
                    }
                </div>
            </ul>
        </div>
    );

}
