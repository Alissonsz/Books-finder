import React from 'react';

const Body = ({books} = props) => {
  return(
    <div>
      {books.map(book => <div key={book.download_page_link}>
        <p>{book.title}</p>
      </div>)}
    </div>
  )
}

export default Body;