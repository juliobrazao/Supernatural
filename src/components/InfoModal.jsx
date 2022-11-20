import React, { useState } from 'react';
import { Button, Modal, ModalDialog } from 'react-bootstrap';

export default function InfoModal(props){

    const [show, setShow] = useState(props.extShow);

    return (
        <>
            <Modal show={show} onBackdropClick={() => setShow(false)}>
                <ModalDialog>
                    <Modal.Header>
                        Help us
                    </Modal.Header>

                    <Modal.Body>
                        This is sparta!
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant='secondary' onClick={() => setShow(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </ModalDialog>
            </Modal>
        </>
    );
}