import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { authRegister, authUpdateProfile, authVerification } = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [accept, setAccept] = useState(false);




    const handlerLogIn = event => {
        setSuccess(false);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photourl.value;
        const password = form.password.value;
        console.log(email, password);
        authRegister(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess(true);
                navigate('/');
                setError('')
                handlerUpdateProfile(name, photo);
                handleAuthVerification();
                toast.success('Verify your email')

            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })


    }

    const handleAuthVerification = () => {
        authVerification()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handlerUpdateProfile = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        authUpdateProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handlerCheckedbox = (event) => {

        setAccept(event.target.checked);

    }
    return (
        <div>
            <div className='w-60 bg-warning p-1 mt-4 mx-auto rounded'>
                <Form onSubmit={handlerLogIn} className='m-5'>
                    <h3 className='text-primary'>Please SignUp</h3>
                    {success && <p className='text-success'>Successful SignUp</p>}
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPicture">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photourl' placeholder="Enter Photo" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                            onClick={handlerCheckedbox}
                            label={<><p>Accept <Link to='/terms'>Terms and Conditions</Link></p></>} />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <Button variant="primary" type="submit" disabled={!accept}>
                        SignUp
                    </Button>
                </Form>
                <Form.Label>Have'n account?please<Link to='/login'><Button variant="link">LogIn</Button></Link></Form.Label>
            </div>
        </div>
    );
};

export default Register;