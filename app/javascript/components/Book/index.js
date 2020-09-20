import React, { useRef } from 'react';
import NoCoverImage from '../../../assets/images/no_cover.jpg';
import { 
  Container,
  DownloadIcon,
  DownloadIconContainer
} from './styles';

const Book = ({book} = props) => {
  const imageRef = useRef(null);

  function coverNotFound () {
    imageRef.current.src = NoCoverImage;
  }

  return(
    <Container>
      <div className="book-image">
        {book.cover_url != undefined ?
          <img src={book.cover_url} ref={imageRef} referrerPolicy="no-referrer" onError={coverNotFound}/>
          :
          <img src={NoCoverImage} />
        }
      </div>
      <div className="book-infos">
        <span><strong>Title: </strong>{book.title}</span>
        <span><strong>Série: </strong>{book.serie}</span>
        <span><strong>Lenguage: </strong>{book.lenguage}</span>
        <span><strong>Author: </strong>{book.author}</span>
        <span><strong>File: </strong>{book.file_infos}</span>
      </div>
      <DownloadIconContainer>
        <DownloadIcon />
      </DownloadIconContainer>
    </Container>
  );
}

export default Book;