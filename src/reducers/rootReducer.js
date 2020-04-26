const initialState = {
  books: [],
  nBook: 0,
  show: [],
  nShow: 0,
  first: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GO_LEFT":
      const leftFirst = state.first > 3 ? state.first - 3 : 0;
      const leftnShow =
        state.nBook - leftFirst > 3 ? 3 : state.nBook - leftFirst;
      const leftShow = state.books.slice(leftFirst, leftFirst + leftnShow);
      return { ...state, show: leftShow, first: leftFirst, nShow: leftnShow };
    case "GO_RIGHT":
      const rightFirst =
        state.first + 3 < state.nBook ? state.first + 3 : state.first;
      const rightnShow =
        state.nBook - rightFirst > 3 ? 3 : state.nBook - rightFirst;
      const rightShow = state.books.slice(rightFirst, rightFirst + rightnShow);
      return {
        ...state,
        show: rightShow,
        first: rightFirst,
        nShow: rightnShow,
      };
    default:
      return state;
  }
};
