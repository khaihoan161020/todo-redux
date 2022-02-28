
// import { createStore } from 'redux'
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composeEnhenser = composeWithDevTools();
// const store = createStore(rootReducer, composeEnhenser);

// export default store;

import filterSlice from '../components/Filters/filterSlice'
import todoListReducer from '../components/TodoList/todoSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore(
    {
        reducer: {
            filter: filterSlice.reducer,
            todoList: todoListReducer.reducer
        }
    }
)

export default store;