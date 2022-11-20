import React, { useState, useRef } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import InfoModal from './components/InfoModal';
import MainMenu from './components/MainMenu';
import MapBox from './components/MapBox';

import NewsBox from "./components/NewsBox";

function App() {

    const infoModalStats = useRef();

    console.log(infoModalStats.current);

    return (
        <>
            <MainMenu />
            <Container fluid>
                <Row>
                    <Col sm={3}>
                        <NewsBox id="1" />
                    </Col>

                    <Col sm={9}>
                        <MapBox />
                        <NewsBox id="2" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
