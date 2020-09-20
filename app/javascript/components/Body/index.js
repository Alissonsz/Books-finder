import React from 'react';
import Book from '../Book';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { 
  Container
} from './styles';

const Body = ({books, isLoading} = props) => {
  console.log(books, isLoading);
  return(
    isLoading == true ?
      <Loader 
        type="Circles"
        width={100}
        heigth={100}
      /> :
      <Container>
        {books.map(book => <Book book={book}/>)}
      </Container>
  )
}

export default Body;