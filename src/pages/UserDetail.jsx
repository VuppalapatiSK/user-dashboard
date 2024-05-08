import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';

function UserDetail() {
    const { id } = useParams();  // gets the rowId
    const navigate = useNavigate();

    const [show, setShow] = useState(true);

    const users = useSelector((state)=>state.users);
    const userDetail = users.filter((f) => f.id === id);
    const user = userDetail[0];

    // console.log(id); 
    // console.log(users); 
    // console.log(userDetail[0].id); 

  const handleClose = () => {
    setShow(false);
    navigate('/');
  };
 

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table className='table table-sm' >
              <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Edit</th>
                </tr>
              </thead>
              <tbody className='mt-2'>
               <tr>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td><Link to={`/update/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link></td>
               </tr>
              </tbody>
            </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserDetail;