import './App.css';
import { useRef, useState } from 'react';

export default function App() {
    const nameRef = useRef();
    const [users, setUsers] = useState([]);

    const addUser = () => {
        setUsers([...users, { name: nameRef.current.value }]);
        nameRef.current.value = ''; // Clear input field
    };

    const userDelt = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>TODO LISTE</h1>
            <input type='text' ref={nameRef} placeholder="Enter name" />
            <button className="add-button" onClick={addUser}>Add User</button>
            <table className='table'>
                <thead>
                    <tr>
                       
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>

                            <td>{user.name}</td>
                            <td>
                                <button className="delete-button" onClick={() => userDelt(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}