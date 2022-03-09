
import './App.css';
import React, {useState, useEffect} from "react";
import {Col, Container, Figure, Row, Table} from "react-bootstrap";
function VideoApp() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/episodes')
            .then(results => results.json())
            .then(data => {
                setData(data);
            });
    }, []);
    return (
            <Container>

                <Row>
                    <Col>
                        {data?data.map((data) =>
                        <Figure>
                            <h2>{data.number}</h2>
                            <h2>{data.title}</h2>
                            <iframe src="https://www.youtube.com/watch?v=ScMzIvxBSi4"></iframe>
                            <Figure.Caption>
                                {data.originalAirDate}
                            </Figure.Caption>
                            <Figure.Caption>
                                {data.desc}
                            </Figure.Caption>
                        </Figure>
                        ):""}
                    </Col>
                </Row>



            </Container>
    );
}

export default VideoApp;
