import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Wishlist from './components/Wishlist/Wishlist';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Wishlist />
    </div>
  );
}

export default App;