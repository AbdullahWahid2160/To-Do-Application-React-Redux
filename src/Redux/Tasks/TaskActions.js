import { ADD_TASK } from './TaskTypes';
import { COMPLETE_TASK } from './TaskTypes';
import { DELETE_TASK } from './TaskTypes';

export const AddTask = Task => {
    return {
        type: ADD_TASK,
        payload: { Task }
    }
}

export const CompleteTask = id => {
    return {
        type: COMPLETE_TASK,
        payload: {
            id,
        }
    }
}

export const DeleteTask = id => {
    return {
        type: DELETE_TASK,
        payload: {
            id,
        }
    }
}