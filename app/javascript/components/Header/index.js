import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookIcon,
  Container,
  SiteName,
  SearchInput,
  SearchIcon,
  SearchContainer
} from './styles';

const Header = ({myRef, searchBooks} = props) => {
  function handleKeyDown(e) {
    if (event.key === 'Enter') {
      searchBooks();
    }
  }

  return (
    <Container>
      <Link to="/games">
        <BookIcon />
      </Link>
      <SiteName>Books-finder</SiteName>
      <SearchContainer>
        <SearchInput ref={myRef} placeholder="Enter the book title" onKeyDown={handleKeyDown}></SearchInput>
        <SearchIcon onClick={searchBooks}/>
      </SearchContainer>
    </Container>
  )
}

export default Header;