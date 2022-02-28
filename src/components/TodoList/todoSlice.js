// const initState = [
//     {
//         id: 1,
//         name: 'Learn abc',
//         completed: false,
//         priority: 'High'
//     },
//     {
//         id: 2,
//         name: 'Learn abcd',
//         completed: true,
//         priority: 'Medium'
//     },
//     {
//         id: 3,
//         name: 'Learn abc asdf',
//         completed: false,
//         priority: 'Low'
//     }
// ];

// const todoListReducer = (state = initState, action) => {
//     console.log(state, action)
//     switch(action.type) {
//         case 'todoList/addTodo':
//             return [
//                 ...state, action.payload
//                 ]
//         case 'todoList/toggleTodoStatus':
//             return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
//         default:
//             return state;
//     }
// }
//  export default todoListReducer;

import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
    name: 'todoList',
    initialState: [
        {
            id: 1,
            name: 'Learn abc',
            completed: false,
            priority: 'High'
        },
        {
            id: 2,
            name: 'Learn abcd',
            completed: true,
            priority: 'Medium'
        },
        {
            id: 3,
            name: 'Learn abc asdf',
            completed: false,
            priority: 'Low'
        },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            currentTodo.completed = !currentTodo.completed;
        }
    }
})