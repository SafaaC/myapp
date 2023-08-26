import React from 'react';
import ListItem from './listItem';
import { Button, Card } from 'react-bootstrap';

class List extends React.Component {
    render() {

        const props = this.props; //should use the same word this.props
        const style = props.isActive ? { color: 'green' } : { color: 'red' };
        return (
            <Card >
                <Card.Body>
                    <Button className="float-right" variant="danger" onClick={props.onDelete}>Delete</Button>
                    <Card.Title>{props.header}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.desc}</Card.Subtitle>
                    <Card.Text>
                        <ListItem onAction={(item) => console.log(item)} item1={props.item1} item2={props.item2} />
                    </Card.Text>
                    <p style={style}>{props.isActive ? "ACTIVE" : "INACTIVE"}</p>
                </Card.Body>
            </Card>
        )
    }
}

export default List;