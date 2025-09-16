
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../Redux/UserDetails/UserSlice';
import { useDispatch } from 'react-redux'

function UpdateUsers() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

        if (!userData.id || !userData.name || !userData.email || !userData.age) {
            alert("Fields missing");
            return;
        }

        dispatch(updateUser({
            id: Number(userData.id),  
            name: userData.name,
            email: userData.email,
            age: userData.age
        }));

        alert("updated successfully");
        navigate("/showUsers");
    };

    return (
        <div>
            <h1>Update user</h1>
            <form onSubmit={handleSubmit}>
                <label>Id</label>
                <input type="number" name="id" value={userData.id} onChange={handleChange} />
                <label>Name</label>
                <input type="text" name="name" value={userData.name} onChange={handleChange} />
                <label>Email</label>
                <input type="email" name="email" value={userData.email} onChange={handleChange} />
                <label>Age</label>
                <input type="number" name="age" value={userData.age} onChange={handleChange} />
                <button type="submit">Update User</button>
            </form>
        </div>
    )
}

export default UpdateUsers;