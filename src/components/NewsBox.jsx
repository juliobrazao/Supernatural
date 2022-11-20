import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

export default function NewsBox(props){

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.id || 1}/comments`)
            .then(res => res.json())
            .then(data => setComments(data));
    }, []);

    console.log(comments);


    return (
        <>
            { comments.map((comment) => 
                <Card className='m-3'>
                    <Card.Header>
                        <strong>{comment.name.toUpperCase()}</strong>
                    </Card.Header>
                    
                    <Card.Body>
                        {comment.body}
                        <hr />
                        <cite>From: <strong>{comment.email.toLowerCase()}</strong></cite>
                    </Card.Body>

                    <Card.Footer className='text-center'>
                        <Button variant='primary' className='mx-1'>Reply</Button>
                        <Button variant='secondary'className='mx-2'>Ignore</Button>
                    </Card.Footer>
                </Card>
            )}
        </>
    )
}