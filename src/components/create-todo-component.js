import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_priority: 'Low',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        })
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted: `);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Description: ${this.state.todo_priority}`);
        console.log(`Todo Description: ${this.state.todo_completed}`);

        const newTodo = {
          todo_description: this.state.todo_description,
          todo_priority: this.state.todo_priority,
          todo_completed: this.state.todo_completed
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
             .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_priority: 'Low',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <form onSubmit={this.onSubmit}>
                        <input type="text"
                               value={this.state.todo_description}
                               onChange={this.onChangeTodoDescription}
                               />
                </form>

                <form onSubmit={this.onSubmit}>
                    <div className="form-check form-check-inline">
                        <input type="radio"
                               className="form-check-input"
                               name="priorityOptions"
                               id="priorityLow"
                               value="Low"
                               checked={this.state.todo_prioirty === "Low"}
                               onChange={this.onChangeTodoPriority}
                               />
                        <label className="form-check-label">Low</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input type="radio"
                               className="form-check-input"
                               name="priorityOptions"
                               id="priorityMedium"
                               value="Medium"
                               checked={this.state.todo_prioirty === "Medium"}
                               onChange={this.onChangeTodoPriority}
                               />
                        <label className="form-check-label">Medium</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input type="radio"
                               className="form-check-input"
                               name="priorityOptions"
                               id="priorityHigh"
                               value="High"
                               checked={this.state.todo_prioirty === "High"}
                               onChange={this.onChangeTodoPriority}
                               />
                        <label className="form-check-label">High</label>
                    </div>
                    <div className="form-group"
>                       <input type="submit" vaue="Create Todo" className="button" />
                    </div>
                </form>
            </div>
        )
    }
}
