import React, { useRef } from 'react';
import NoCoverImage from '../../../assets/images/no_cover.jpg';
import { 
  Container
} from './styles';

const Book = ({book} = props) => {
  const imageRef = useRef(null);

  function coverNotFound () {
    imageRef.current.src = NoCoverImage;
  }

  return(
    <Container>
      <div className="book-image">
        <img src={book.cover_id} ref={imageRef} referrerPolicy="no-referrer" onError={coverNotFound}/>
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