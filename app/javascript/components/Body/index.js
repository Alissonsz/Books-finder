import React from 'react';
import Book from '../Book';
import { 
  Container
} from './styles';

const Body = ({books} = props) => {
  console.log(books);
  return(
    <Container>
      {books.map(book => <Book book={book}/>)}
    </Container>
  )
}

export default Body;