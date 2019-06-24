import {CHECK, UNCHECK, ADDTODO, FETCHED, SAVE, DELETE, saveTodos} from '../actions';
const initialState = {
    todo: [
        
    ]
};

export const todoReducer = (state = initialState, action) => {
    let newTodo;
    let newState;
    switch(action.type) {
        case CHECK:
            newTodo = state.todo.map(todo => {
                if (todo === action.previous) {
                    return todo = action.payload; 
                }
                else {
                    return todo;
                }
            });
            newState = {...state, todo: newTodo};
            saveTodos(newState);
            return newState;
        case UNCHECK:
                newTodo = state.todo.map(todo => {
                    if (todo === action.previous) {
                        return todo = action.payload; 
                    }
                    else {
                        return todo;
                    }
                });
                newState = {...state, todo: newTodo};
                saveTodos(newState);
                return newState;
        case ADDTODO:
            newTodo = Array.from(state.todo);
            newTodo.push(action.payload);
            newState = {...state, todo: newTodo};
            saveTodos(newState);
            return newState;
        case FETCHED: 
            return action.payload;
        case SAVE: 
            localStorage.setItem('state', action.payload)
            return action.payload;
        case DELETE:
            newTodo = state.todo.filter(todo => todo.id === action.payload.id ? false : true)
            newState = {...state, todo: newTodo};
            saveTodos(newState);
            return newState;
        default:
            return state;
    }
}