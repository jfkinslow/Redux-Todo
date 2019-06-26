import uuidv1 from 'uuid';
export const CHECK = "CHECK";
export const UNCHECK = "UNCHECK";
export const ADDTODO = "ADDTODO";
export const FETCHED = "FETCHED";
export const SAVE = "SAVE";
export const DELETE = "DELETE";
export const DELETECOMPLETE = "DELETECOMPLETE";

export const checkTodo = (todo) => dispatch => {
    let newTodo = {...todo};
    newTodo.completed = true;
    dispatch({type: CHECK, previous: todo, payload: newTodo});
}
export const uncheckTodo = (todo) => dispatch => {
    let newTodo = {...todo};
    newTodo.completed = false;
    dispatch({type: UNCHECK, previous: todo,payload: newTodo});
}
export const addTodo = (text) => dispatch => {
    let newTodo = {id: uuidv1(), text: text, completed: false};
    dispatch({type: ADDTODO, payload: newTodo});
}
export const fetchTodos = () => dispatch => {
    let newState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {
        todo: []
    };
    localStorage.setItem('state', JSON.stringify(newState));
    dispatch({type: FETCHED, payload: newState});
}
export const saveTodos = (newState) => {
    localStorage.setItem('state', JSON.stringify(newState));
}
export const deleteTodo = (todo) => dispatch => {
    dispatch({type: DELETE, payload: todo});
}
export const removeCompleted = () => dispatch => {
    dispatch({type: DELETECOMPLETE})
}