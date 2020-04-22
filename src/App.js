import React from "react";
import "./App.css";
import { getBooks } from "./services/fakeBookService";

function App() {
  const books = getBooks();
  for (let b of books) {
    const salesInfo = b.saleInfo;
    const { saleability, listPrice } = salesInfo;
    if (saleability === "FOR_SALE") {
      const { amount, currencyCode } = listPrice;
      console.log(amount + currencyCode);
    } else {
      console.log(saleability);
    }
  }
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
