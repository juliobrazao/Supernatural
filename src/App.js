import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import MainMenu from './components/MainMenu';
import MapBox from './components/MapBox';
import NewsBox from "./components/NewsBox";

function App() {


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
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
