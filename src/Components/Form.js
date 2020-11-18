import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AddTask } from '../Redux/index';
import '../Styles.css';
import PendingTasks from './PendingTasks';
import CompletedTasks from './CompletedTasks';

const Form = (props) => {
    //const [Text, setText] = useState('');
    const [Color, setColor] = useState('');
    // const [Completed_Tasks, setCompletedTasks] = useState([]);


    //   function CompletedTasksFromPendingList(DataFromPendingList) {
    //     var Index=Tasks.findIndex(obj=>obj===DataFromPendingList)
    //     console.log("ye Index nikaala hy main ne : ", Index)
    //     delete Tasks[Index];
    //     setTasks(Tasks);
    //     setCompletedTasks([...Completed_Tasks, DataFromPendingList]);
    //   }

    //   function TaskDeleted(DatafromChilds){
    //     var Index=Tasks.findIndex(obj=>obj===DatafromChilds)
    //     delete Tasks[Index]
    //     DatafromChilds.remove();
    //   }

    function HandleColorChange(event) {
        setColor(event.target.value);
    }

    function HandleSubmit(event) {
        event.preventDefault();

        var Text = event.target.elements.TextInput.value;

        if (!Text.trim()) {
            return
        }
        const NewTask = {
            Key: Date.now(),
            Text,
            Color: Color,
            Done: false
        };

        props.AddTask(NewTask);

        event.target.elements.TextInput.value = ""
    }

    return (
        <div>
            <form className="Form" onSubmit={HandleSubmit} >
                <div className="ColorPickerContainer">
                    <h3>Pick a Background Color for the Note!</h3>
                    <input
                        onChange={HandleColorChange}
                        type="color"
                        name="color"
                        id="ColorPicker"
                        value={Color}
                    />
                </div>
                <div className="InputContainer">
                    <input
                        //style={{backgroundColor: Color}}
                        id="TextInput"
                        type="text"
                        placeholder="Enter Task to be done..."
                        required
                    />
                    <button className="SubmitButton" type="submit">
                        Add To_Do
          </button>
                </div>
            </form>
            <PendingTasks />
            <CompletedTasks />
        </div>
    );
}

const MapStateToProps = state => {
    return {
        Tasks: state.Tasks
    }
}

export default connect(MapStateToProps, { AddTask })(Form)