import React, { useEffect, useState } from 'react'
import api from '../api/fetch'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const NavBar = ({current}) => {
    console.log(current);
    const[nav, setNav] = useState(['new', 'stamp']);
    let count = 0;

    useEffect(() => {
        const navCategory = async() => {
            try {
                const response = await api.get('products/categories');
                setNav(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        navCategory();
    }, [])
  
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand >Shop</Navbar.Brand>
                <Nav className="me-auto">
                    {nav.length && 
                        nav.map((item) => (
                            <Nav.Link key={count++} style={{textTransform: 'capitalize'}}>
                                <Link to={`/products/categories/${item}`} className={current === item ? "text-decoration-none active": "text-decoration-none"}>{item}</Link>
                            </Nav.Link>
                        ))
                    }
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default NavBar