import {createSlice} from '@reduxjs/toolkit';

import users from '../../user';

const userSlice = createSlice({
    name: "user",
    initialState: {
        list: users
    },
    reducers: {
        addUser: (state, action) => {
            state.list.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.list = state.list.filter(user => user.email !== action.payload);
        },
        updateUser: (state, action) => {
            const {id, email, name, age} = action.payload;
            const user = state.list.find(u => u.id === id);
            if(user){
                user.name = name;
                user.email = email;
                user.age = age;
            }
        }
    }
})

export const {addUser, deleteUser, updateUser} = userSlice.actions;
export default userSlice.reducer;