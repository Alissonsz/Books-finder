import React, { useRef, useState, Fragment } from 'react';
import Header from '../../components/Header';
import Body from '../../components/Body';
import api from '../../services/api';

const MainPage = () => {
  const searchInputRef = useRef(null);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function searchBooks() {
    setIsLoading(true);
    const response = await api.get('/api/v1/search_book', {
      params: {
        title: searchInputRef.current.value
      }
    });
   
    searchInputRef.current.value = '';
    setIsLoading(false);
    await setBooks(response.data);
  }

  console.log(books);

  return (
    <Fragment>
      <Header myRef={searchInputRef} searchBooks={searchBooks} />
      <Body isLoading={isLoading} books={books}/>
    </Fragment>
  )
}

export default MainPage;