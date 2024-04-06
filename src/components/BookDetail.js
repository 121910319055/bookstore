

import React from 'react';

const BookDetail = ({ book }) => {
  const handleReadNow = () => {
    window.open(book.volumeInfo.previewLink, '_blank');
  };

  const handleMoreInfo = () => {
    window.open(book.volumeInfo.infoLink, '_blank');
  };

  return (
    <div className="book-detail">
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.description}</p>
      <div>
        <button onClick={handleReadNow}>Read Now</button>
        <button onClick={handleMoreInfo}>More Info</button>
      </div>
    </div>
  );
};

export default BookDetail;
