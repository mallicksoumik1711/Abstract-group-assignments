
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../Redux/UserDetails/UserSlice';
import { useDispatch } from 'react-redux';

function ShowUsers() {
    const [showUsers, setShowUsers] = useState(false);
    const users = useSelector((state) => state.user.list);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userDetails = () => {
        setShowUsers(!showUsers);
    }

    const handleDelete = (email) => {
        dispatch(deleteUser(email));
    }

    return (
        <div className="container d-flex flex-wrap flex-column align-items-center">
            <h1>Users</h1>
            <button onClick={()=>{
                userDetails();
                navigate('/showUsers')
            }} className="mb-2">
                {showUsers ? "Hide Users" : "Show users"}
            </button>

            <button className="mb-3" onClick={()=>navigate("/addUsers")}>Add Users</button>

            {showUsers && (
                <ul className='d-flex gap-5'>
                    {users.map((user, index) => (
                        <li key={index} className='list-unstyled'>
                            <p><strong>Id:</strong> {user.id}</p>
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Age:</strong> {user.age}</p>
                            <div className="btns d-flex gap-4 mb-5">
                                <button onClick={()=>handleDelete(user.email)}>Delete</button>
                                <button onClick={()=>navigate('/updateUser', {state: user})}>Edit</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div >
    )
}

export default ShowUsers