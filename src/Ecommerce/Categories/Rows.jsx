import { Row } from 'react-bootstrap';
import React, { useContext } from 'react'
import DataContext from '../context/DataContext';
import Cards from './Cards';

function Rows() {
    const {items} = useContext(DataContext);
    return (
            <Row className='m-2'>
                {
                    items.map((it) => (
                            <Cards key={it.id}
                                image = {it.image}
                                title = {it.title}
                                description = {it.description}
                                price = {it.price}
                                id = {it.id}
                            />
                    ))
                }
            </Row>
    )
}
export default Rows