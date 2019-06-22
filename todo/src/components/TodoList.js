import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {
    
    render() {
        return(
            <div className="TodoList">
            {this.props.todos.map(todo => <Todo key={todo.id} todo={todo} checkTodo={this.props.checkTodo} uncheckTodo={this.props.uncheckTodo} deleteTodo={this.props.deleteTodo} /> )}
            </div>
        );
    }
}