import React, { useState } from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import InfoModal from './InfoModal';

export default function MainMenu(props){

    const [modalShow, setModalShow] = useState(false);

    const showModal = () => {
        setModalShow(true);
    }

    return (
        <>
            <Navbar bg='light' expand='sm'>
                <Container>
                    <Navbar.Brand>
                        <strong>
                            SupernaturalAPP
                        </strong>
                    </Navbar.Brand>

                    <Navbar.Text>
                        <Button variant='success' onClick={showModal}>Invoke Modal</Button>
                    </Navbar.Text>
                </Container>
            </Navbar>


            <InfoModal extShow={modalShow} />
        </>
    );
}