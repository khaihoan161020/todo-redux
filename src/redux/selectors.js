import { createSelector } from '@reduxjs/toolkit'
export const todoListSelector = (state) => state.todoList;

export const searchTextSelector = (state) => state.filter.search;
export const statusRadioSelector = (state) => state.filter.status;
export const prioritiesSelector = (state) => state.filter.priority;
export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    statusRadioSelector,
    prioritiesSelector,
    (todoList, searchText, statusRadio, priorites) => {
        return todoList.filter((todo) => {
            if ( statusRadio === 'All') {
                return priorites.length 
                    ? todo.name.includes(searchText) && priorites.includes(todo.priority)
                    : todo.name.includes(searchText);
            }
            return (todo.name.includes(searchText) && 
            ( statusRadio === 'Completed' ? todo.completed : !todo.completed ) &&  (priorites.length ? priorites.includes(todo.priority) : true));
        })
    }

)