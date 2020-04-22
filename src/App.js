import React from "react";
import "./App.css";
import { getBooks } from "./services/fakeBookService";

function App() {
  const books = getBooks();
  console.log(books.length);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
