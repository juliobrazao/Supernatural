import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import InfoModal from './InfoModal';

export default function MainMenu() {
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
                        <InfoModal />
                    </Navbar.Text>
                </Container>
            </Navbar>
        </>
    );
}