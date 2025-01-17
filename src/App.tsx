import React from 'react';
import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import {BuildingByNumber} from "./components/BuildingByNumber";
import {LocationByLetters} from "./components/LocationByLetters";

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <BuildingByNumber />
                    </Col>
                    <Col xs={12} md={6}>
                        <LocationByLetters />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
