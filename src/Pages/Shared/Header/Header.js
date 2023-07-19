import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, authLogOut } = useContext(AuthContext);
    console.log(user);
    const handlerLogOut = () => {
        authLogOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand ><Link>Vamous News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All News</Nav.Link>

                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            {
                                user?.uid ? <>
                                    {user?.displayName ? <p>{user.displayName}</p>
                                        : <p>undefine</p>
                                    }
                                    {user?.photoURL && <img className='rounded-circle mx-3'
                                        roundedCircle
                                        style={{ height: '25px' }}
                                        src={user.photoURL}
                                    ></img>}
                                    <button onClick={handlerLogOut} type="button" className="btn btn-sm btn-dark mt-0">LogOut</button>
                                </>
                                    :
                                    <>
                                        <Link to='/register'><button type="button" className="btn btn-sm btn-dark mx-2">SignUp</button></Link>
                                        <Link to='/login'><button type="button" className="btn btn-sm btn-dark">LogIn</button></Link>
                                    </>}

                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;