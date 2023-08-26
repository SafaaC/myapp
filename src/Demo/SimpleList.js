import React from 'react';
import List from './list.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SimpleList(props) {
    const { data, onAction } = props;
    return (
        <Container>
            <Row>

                {
                    data.map((obj, index) =>
                        <Col>
                            <List
                                key={index}
                                header={obj.header}
                                desc={obj.description}
                                item1={obj.item1}
                                item2={obj.item2}
                                isActive={obj.isActive}
                                onDelete={() => onAction(index)}
                            /></Col>
                    )
                }

            </Row>
        </Container>
    );
}
export default SimpleList;