import React from 'react';

export class Todo extends React.Component {

    check(event) {
        event.preventDefault();
        console.log(this.props.todo.completed);
        this.props.todo.completed ? this.props.uncheckTodo(this.props.todo) : this.props.checkTodo(this.props.todo);
    }

    deleteTodo(event) {
        event.preventDefault();
        this.props.deleteTodo(this.props.todo);
    }

    render() {
        return (
            <div unselectable="on" className={this.props.todo.completed ? "todo todo-complete" : "todo"}>
                <p unselectable="on" className="unselectable" onClick={this.check.bind(this)}>{this.props.todo.text}<button onClick={this.deleteTodo.bind(this)}>Delete</button></p>
            </div>
        )
    }
}