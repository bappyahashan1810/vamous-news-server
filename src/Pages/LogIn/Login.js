import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';



const Login = () => {
    const { authLogIn } = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const handlerLogIn = event => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        authLogIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
                navigate(from, { replace: true });
                setError('');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    return (
        <div className='w-60 bg-warning p-1 mt-4 mx-auto rounded'>
            <Form onSubmit={handlerLogIn} className='m-5'>
                <h3 className='text-primary'>Please Login</h3>
                {success && <p className='text-success'>Successful Login</p>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <p className='text-danger'>{error}</p>
                <Button variant="primary" type="submit">
                    LogIn
                </Button>
            </Form>
            <Form.Label>Are you new comer?please<Link to='/register'><Button variant="link">SignUp</Button></Link></Form.Label>
        </div>
    );
};

export default Login;