
import Button from 'react-bootstrap/Button';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Cards({image, title, description, price, id}) {
    return (
        <>
            <Col key={id}>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            { "price: $" + price}
                        </Card.Text>
                        <Link to={`/products/${id}`}><Button variant="primary">View</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}