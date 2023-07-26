import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const { id, text } = action.payload;
            state.items = [...state.items, { id, text, completed: false }];
            console.log(state.items);
        },
        deleteItem: (state, action) => {
            const idDelete = action.payload;
            state.items = state.items.filter((item) => item.id !== idDelete)
        },
        toggleItem: (state, action) => {
            const idToggle = action.payload;
            const itemToggle = state.items.find((item) => item.id === idToggle)
            if (itemToggle) {
                itemToggle.completed = !itemToggle.completed
            }
        },
        updateItem: (state, action) => {
            const { id, text } = action.payload;
            const updatedItems = state.items.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        text: text
                    };
                }
                return item;
            });
            state.items = updatedItems;
        }
        
    }
});


export const { addItem, deleteItem, toggleItem, updateItem } = todoSlice.actions;
export default todoSlice.reducer;