import React from 'react';
import CatCard from './components/CatCard';
import cats from './catData'; // Import the cat data

function App() {
  return (
    <div className="app">
      <h1>Meet Our Cats</h1>
      <div className="cat-list">
        {cats.map((cat, index) => (
          <CatCard key={index} {...cat} />
        ))}
      </div>
    </div>
  );
}

export default App;
