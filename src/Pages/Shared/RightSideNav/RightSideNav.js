import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import RightSideCarosel from '../RightSideCarosel/RightSideCarosel';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';







const RightSideNav = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>

                <Button onClick={handleGoogleLogIn} className='mb-2' variant="outline-primary">LogIn with Google</Button>
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