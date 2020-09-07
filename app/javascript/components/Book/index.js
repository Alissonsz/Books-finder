import React from 'react';
import { 
  Container
} from './styles';

const Book = ({book} = props) => {
  return(
    <Container>
      <div className="book-image">
        <img src="https://images-submarino.b2w.io/produtos/imagens/1517027661/1517027695_1GG.jpg"/>
      </div>
      <div className="book-infos">
        <span><strong>Title: </strong>{book.title}</span>
        <span><strong>Série: </strong>{book.serie}</span>
        <span><strong>Lenguage: </strong>{book.lenguage}</span>
        <span><strong>Author: </strong>{book.author}</span>
        <span><strong>File: </strong>{book.file_infos}</span>
      </div>
    </Container>
  );
}

export default Book;