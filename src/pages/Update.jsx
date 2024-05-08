import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../store/UserReducer';

const Update = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    const {id} = useParams();
    const users = useSelector((state)=>state.users);                                   
    const existingUser = users.filter((f) => f.id === id);

    const {username, email, role} = existingUser[0];

    const [uname, setUname] = useState(username);
    const [uemail, setUemail] = useState(email);    
    const [urole, setUrole] = useState(role);    

    const updateHandler = (e)=>{
        e.preventDefault();

        dispatch(updateUser({
            id: id,
            username: uname,
            email: uemail,
            role: urole
        }));
        navigate('/');
    }

  return (
    <div className='container-sm m-auto bg-secondary text-white p-5 my-5 border'>
        <h4 className='text-center'>Update the User</h4>
        <form onSubmit={updateHandler} className='w-50 m-auto'>
            <div className='m-2'>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' className='form-control' value={uname} onChange={(e)=>setUname(e.target.value)}/>
            </div>
            <div className='m-2'>
                <label htmlFor="email">Email:</label>
                <input type="text" name='email'  className='form-control' value={uemail} onChange={(e)=>setUemail(e.target.value)}/>
            </div>
            <div className='m-2'>
                <label htmlFor="role">Role:</label>
                <input type="text" name='role' className='form-control' value={urole} onChange={(e)=>setUrole(e.target.value)}/>
            </div>
            <button className='btn btn-sm btn-info m-3'>Update</button>
        </form>
    </div>
  )
}

export default Update