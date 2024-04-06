// src/App.js

import React, { useState } from 'react';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import './App.css';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="App">
      <h1>Virtual Bookstore</h1>
      <div className="container">
        <div className="sidebar">
          <BookList onSelect={handleBookSelect} />
        </div>
        <div className="main-content">
          {selectedBook ? (
            <BookDetail book={selectedBook} />
          ) : (
            <p>Select a book to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
