
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookDetail from './BookDetail'; 

const BookList = ({ onSelect }) => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('harry+potter');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
        );
        setBooks(response.data.items || []);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    onSelect(book); 
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-item" onClick={() => handleBookClick(book)}>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            <h3>{book.volumeInfo.title}</h3>
          </div>
        ))}
      </div>
      {selectedBook && <BookDetail book={selectedBook} />}
    </div>
  );
};

export default BookList;
