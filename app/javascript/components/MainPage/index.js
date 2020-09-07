import React, { useRef, useState, useEffect, Fragment } from 'react';
import Header from '../Header';
import Body from '../Body';
import api from '../../services/api';

const MainPage = () => {
  const searchInputRef = useRef(null);
  const [books, setBooks] = useState([]);

  async function searchBooks() {
    const response = await api.get('/api/v1/search_book', {
      params: {
        title: searchInputRef.current.value
      }
    });
   
    searchInputRef.current.value = '';
    await setBooks(response.data);
  }

  console.log(books);

  return (
    <Fragment>
      <Header myRef={searchInputRef} searchBooks={searchBooks} />
      <Body books={books}/>
    </Fragment>
  )
}

export default MainPage;