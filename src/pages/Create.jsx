import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/UserReducer';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const Create = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const [isValidEmail, setIsValidEmail] = useState(false);

    const users = useSelector((state)=>state.users);

    // EMAIL VALIDATION
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email); 
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(validateEmail(email)){
            setIsValidEmail(false);
            dispatch(addUser( {id: +users[users.length-1].id + 1, username, email, role} ));
            navigate('/');
        }else{
            setIsValidEmail(true);
        }
    }


  return (
    <div className='container-sm py-5 bg-secondary text-white my-5 border'>
        <form onSubmit={handleSubmit} className='w-50 m-auto'>
            <div className='m-2'>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' required className='form-control' onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='m-2'>
                <label htmlFor="email">Email:</label>
                <input type="text" name='email' required className='form-control' onChange={(e)=>(setEmail(e.target.value), setIsValidEmail(false))}/>
            </div>
            {isValidEmail && <Alert variant='danger'>
              Enter a Valid Email Address
            </Alert> }
            <div className='m-2'>
                <label htmlFor="role">Role:</label>
                <input type="text" name='role' required className='form-control' onChange={(e)=>setRole(e.target.value)}/>
            </div>
            <button className='btn btn-sm btn-info m-3'>Submit</button>
        </form>
    </div>
  )
}

export default Create