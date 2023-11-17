import React, { useEffect, useState } from 'react'
import api from '../api/fetch'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';

const NavBar = () => {
    const {id} = useParams();
    const[nav, setNav] = useState([]);
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
                        nav.map((item, index) => (
                            <li className='list-unstyled' key={index}>
                                <Link style={{textTransform: 'capitalize'}} to={`/products/categories/${item}`} className={id === item ? "text-decoration-none m-2 active": "text-decoration-none m-2"}>{item}</Link>
                            </li>
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