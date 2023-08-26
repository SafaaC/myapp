import React from 'react'
import BodyDisplayFunction from './body.js';
import NavbarDemo from './navbar.js';
import Card from 'react-bootstrap/Card';
const BodyCard = () => {
    return (
        <Card>
            <Card.Body>
                <div className="header">
                    <NavbarDemo />
                </div>
                <div className="body">
                    <BodyDisplayFunction />     {/* {bodyDisplayFunction()} */}
                </div>
            </Card.Body>
        </Card>
    )
}

export default BodyCard