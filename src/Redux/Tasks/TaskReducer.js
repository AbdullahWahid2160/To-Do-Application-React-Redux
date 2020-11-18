import { ADD_TASK } from './TaskTypes';
import { COMPLETE_TASK } from './TaskTypes';
import { DELETE_TASK } from './TaskTypes';

const InitialState = {
    Tasks: [],
}

const TaskReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                Tasks: [
                    ...state.Tasks, action.payload.Task
                ]
            };
        case COMPLETE_TASK:
            return {
                ...state,
                Tasks: [
                    ...state.Tasks.map(task => 
                        task.Key === action.payload.id
                            ? { ...task, Done: true }
                            : task
                    ),
                ],

            }
        case DELETE_TASK:
            return {
                ...state,
                Tasks: [
                    ...state.Tasks.filter(
                        task => task.Key !== action.payload.id
                        
                    )
                ]
            }
        default:
            return state
    }
}

export default TaskReducer