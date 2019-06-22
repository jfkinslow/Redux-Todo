import React from 'react';
import {TodoList} from '../components/TodoList';
import {checkTodo, uncheckTodo, addTodo, fetchTodos, deleteTodo} from '../actions';
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
    render() {
        return (
            <div className="TodoListView">
                <h1>Todo</h1>
                <form><input type="text" value={this.todoText} name="todoText" placeholder="New Todo Text" onChange={this.todoTextChange.bind(this)} /><button onClick={this.addTodo.bind(this)}>Add New Todo</button></form>
                <TodoList todos={this.props.todos} checkTodo={this.props.checkTodo} uncheckTodo ={this.props.uncheckTodo} deleteTodo={this.props.deleteTodo}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todoReducer.todo
});

export default connect(
    mapStateToProps,
    { checkTodo, uncheckTodo, addTodo, fetchTodos, deleteTodo }
)(TodoListView);
