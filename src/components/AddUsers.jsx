
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { addUser } from '../Redux/UserDetails/UserSlice';
import { useDispatch } from 'react-redux'

function AddUser() {
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        id: "",
        name: "",
        email: "",
        age: ""
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const age = e.target.age.value;

        if (!id || !name || !email || !age) {
            alert("Fields missing")
            return
        }
        
        dispatch(addUser(userData));
        alert("added successfully");
        navigate('/');
    }

    const navigate = useNavigate();
    return (
        <div>
            <h1>Add user</h1>
            <form onSubmit={handleSubmit}>
                <label>Id</label>
                <input type="number" name="id" value={userData.id} onChange={handleChange} />
                <label>Name</label>
                <input type="text" name="name" value={userData.name} onChange={handleChange} />
                <label>Email</label>
                <input type="email" name="email" value={userData.email} onChange={handleChange} />
                <label>Age</label>
                <input type="number" name="age" value={userData.age} onChange={handleChange} />
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}

export default AddUser;