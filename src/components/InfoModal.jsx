import React, { useState } from 'react';
import { Alert, Button, Modal, Table } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { ArrowRight }from 'react-bootstrap-icons';


export default function InfoModal(){
    
    const user_result = useFetch('https://jsonplaceholder.typicode.com/users/1');
    const comment_result = useFetch('https://jsonplaceholder.typicode.com/comments/2');
    const list_result = useFetch('https://jsonplaceholder.typicode.com/users/1/albums');

    const [show, setShow] = useState(false);
    const [user, setUser] = useState({});
    const [comment, setComment] = useState({});
    const [list, setList] = useState([]);
    
    const ShowModal = () => {
        setShow(true);
        setUser(user_result);
        setComment(comment_result);
        setList(list_result);
    }

    const HandleClose = () => {
        setShow(false);
    }

    return (
        <>
            <Button variant='success' onClick={ShowModal}>Invoke Modal</Button>

            <Modal size='lg' show={show}>
                <Modal.Header>
                    Help us
                </Modal.Header>

                <Modal.Body style={{maxHeight: '80vh', overflow: 'auto'}}>
                    <h3 className='my-3'>User Info</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Username</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Alert variant='info' className='my-3'>
                        <h5>Last Travel Route</h5>
                        <p style={{fontSize: '2rem', textAlign: 'center'}}>
                            <strong>MAO</strong>
                            <ArrowRight className='mx-3' />
                            <strong>CWB</strong>
                            <ArrowRight className='mx-3' />
                            <strong>GRU</strong>  
                        </p>
                    </Alert>

                    <hr className='m-3' />

                    <h3 className='my-3'>Most Voted Comment</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Content</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{comment.name}</td>
                                <td>{comment.email}</td>
                                <td>{comment.body}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <hr className='m-3' />

                    <h3 className='my-3'>Top #10 Comments of All Time</h3>
                    <Table>
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Comment Title</td>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map(item =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='secondary' onClick={HandleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}