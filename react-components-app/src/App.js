<<<<<<< Updated upstream
import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Card from './components/Card';
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Carousel />
      
      <div className="components-grid">
        <Card
          imageUrl="https://picsum.photos/id/1020/300/200"
          title="Card 1"
          description="This is the first card component"
        />
        <Card
          imageUrl="https://picsum.photos/id/1021/300/200"
          title="Card 2"
          description="This is the second card component"
        />
        <Card
          imageUrl="https://picsum.photos/id/1022/300/200"
          title="Card 3"
          description="This is the third card component"
        />
      </div>

      {/* <Accordion /> */}
      {/* <Form /> */}
    </div>
  );
}
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> Stashed changes
