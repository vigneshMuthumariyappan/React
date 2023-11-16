import {React, useEffect, useState} from 'react'
import NavBar from '../Nav/NavBar'
import { Link, useParams } from 'react-router-dom'
import api from '../api/fetch';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';

const Categories = () => {
    const[item, setItem] = useState([]);

    const {id} = useParams();
    useEffect(() => {
        const navCategory = async() => {
            try {
                const response = await api.get('products/category/'+id);
                setItem(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        navCategory();
    }, [id])
  return (
    <>
        <NavBar current={id} />
        <section>
                <Container className='mt-2'>
                    <Row className='m-2'>
            {
                item.map((it) => (
                        <Col>
                            <Card style={{ width: '18rem' }} >
                                <Card.Img variant="top" src={it.image} />
                                <Card.Body>
                                    <Card.Title>{it.title}</Card.Title>
                                    <Card.Text>
                                        {it.description}
                                    </Card.Text>
                                    <Card.Text>
                                        { "price: $" + it.price}
                                    </Card.Text>
                                    <Link to={`/products/${it.id}`}><Button variant="primary">View</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                ))
            }
                    </Row>
            </Container>
        </section>
        
    </>
  )
}

export default Categories