import {React} from 'react'
import NavBar from '../Nav/NavBar'
import { Container } from 'react-bootstrap';
import { DataProvider } from '../context/DataContext';
import Rows from './Rows';

const Categories = () => {

  return (
    <DataProvider>
        <NavBar />
        <section>
            <Container className='mt-2'>
                <Rows />
            </Container>
        </section>
    </DataProvider>
  )
}

export default Categories