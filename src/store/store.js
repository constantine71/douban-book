import { getBooks } from "../services/fakeBookService";
import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

const preloadBooks = getBooks();
const numberOfBooks = preloadBooks.length;
const preloadShow =
  numberOfBooks > 3
    ? [preloadBooks[0], preloadBooks[1], preloadBooks[2]]
    : [...preloadBooks];
const numberOfShow = preloadShow.length;
const preloadState = {
  books: preloadBooks,
  nBook: numberOfBooks,
  show: preloadShow,
  nShow: numberOfShow,
  first: 0,
};

const store = createStore(rootReducer, preloadState);

export default store;
