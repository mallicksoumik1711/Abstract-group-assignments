import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserDetails/UserSlice';

const store = configureStore({
    reducer: {
        user: userReducer
    }
});

export default store;