import React, { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function FetchBox(props){

    const [defValue, setDefValue] = useState(props.defValue);
    const fieldReference = useRef(null);

    return (
        <>
            <Form>
                <Form.Group className='m-3'>
                    <Form.Label>ID</Form.Label>
                    <Form.Control ref={fieldReference} type='number' placeholder='Insert a number between 1 and 10' value={defValue} />
                </Form.Group>

                <Form.Group className='m-3'>
                    <Button className='btn btn-success w-100' onClick={setDefValue}>Fetch!</Button>
                </Form.Group>
            </Form>
        </>
    )
}