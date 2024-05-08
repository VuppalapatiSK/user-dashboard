import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from '../store/UserReducer';
import Swal from 'sweetalert2';
import { Table } from 'react-bootstrap';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state)=>state.users);
    
    // PAGINATION
    
    const [currPage, setCurrPage ] = useState(1);
    const recordPerPage = 10;
    const lastInd = currPage * recordPerPage;  
    const firstInd = lastInd - recordPerPage;  
    const records = user.slice(firstInd, lastInd) ;
    const pageN = Math.ceil(user.length / recordPerPage );
    const pageNum = [...Array(pageN + 1).keys()].slice(1);   
    
    // PAGINATION HANDLING
    // previous page
    function prevPage(){
        if(currPage !== 1){
            setCurrPage(currPage -1);
        }
    }
    
    // next page 
    function nxtPage(){
        if(currPage !== lastInd){
            setCurrPage(currPage + 1);
        }
    }
    
    // change page
    function chnPage(id){
        setCurrPage(id);
    }
    
    // UserDetail page
    function handlerow(rowId){
        navigate(`/userDetail/${rowId}`)
    }
    // DELETION

    const handleDelete = (id,e)=>{
        e.stopPropagation();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              dispatch(deleteUser({id}));
            }
          });
    }
    
    return (
        <div className='container-sm mt-5'>
        <h2 className='text-center'>SasiKumar's Assignment</h2>
        <Link to='/create' className='btn btn-success my-3'>Create +</Link>
        <div className='table-responsive-sm'>
        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {records.map((item)=>{
                    return(
                        <tr key={item.id} onClick={()=>handlerow(item.id)}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <button className='btn btn-sm btn-danger ms-2' onClick={(e)=>handleDelete(item.id,e)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        </div>
        <nav>
            <ul className='pagination'>
                <li className="page-item">
                    <a href="#" className='page-link' onClick={prevPage}>Prev</a>
                </li>
                {
                    pageNum.map((n,i)=>(
                        <li className={`page-item ${currPage === n? 'active' : ''}`} key={i}>
                            <a href="#" className='page-link' onClick={()=>chnPage(n)}>{n}</a>
                        </li>
                    ))
                }
                <li className="page-item">
                    <a href="#" className='page-link' onClick={nxtPage}>Next</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Home