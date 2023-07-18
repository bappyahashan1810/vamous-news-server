import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import RightSideCarosel from '../RightSideCarosel/RightSideCarosel';







const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>

                <Button className='mb-2' variant="outline-primary">LogIn with Google</Button>
                <Button variant="outline-dark">Login With GitHub</Button>


            </ButtonGroup>

            <div className='mt-5'>
                <h5>Find us on:</h5>
                <ListGroup>
                    <ListGroup.Item>Facebook</ListGroup.Item>
                    <ListGroup.Item>Whatsapp</ListGroup.Item>
                    <ListGroup.Item>Twitter</ListGroup.Item>
                    <ListGroup.Item>Twitch</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>

            </div>
            <div>
                <RightSideCarosel></RightSideCarosel>
            </div>
        </div>
    );
};

export default RightSideNav;