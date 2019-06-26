import React from 'react';
import {TodoList} from '../components/TodoList';
import {checkTodo, uncheckTodo, addTodo, fetchTodos, deleteTodo, removeCompleted} from '../actions';
import {connect} from 'react-redux';

class TodoListView extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: ""
        }
    }
    componentDidMount() {
        this.props.fetchTodos();
    }

    addTodo(event) {
        event.preventDefault();
        this.props.addTodo(this.state.todoText);
    }

    todoTextChange(event) {
        event.preventDefault();
        this.setState({...this.state, todoText: event.target.value});
    }

    deleteComplete(event) {
        event.preventDefault();
        this.props.removeCompleted();
    }
    render() {
        if (typeof this.props.todos !== 'object'){
            return (
                <div className="Error">
                    Error: Local Storage Corrupted Please reload to reset local storage.
                </div>
            )
        } else {
            return (
                <div className="TodoListView">
                    <h1>Todo</h1>
                    <form><input type="text" value={this.todoText} name="todoText" placeholder="New Todo Text" onChange={this.todoTextChange.bind(this)} /><button onClick={this.addTodo.bind(this)}>Add New Todo</button></form><button onClick={this.deleteComplete.bind(this)}>Delete Completed</button>
                    <TodoList todos={this.props.todos} checkTodo={this.props.checkTodo} uncheckTodo ={this.props.uncheckTodo} deleteTodo={this.props.deleteTodo}/>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    todos: state.todoReducer.todo
});

export default connect(
    mapStateToProps,
    { checkTodo, uncheckTodo, addTodo, fetchTodos, deleteTodo, removeCompleted }
)(TodoListView);
