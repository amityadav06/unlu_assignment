const app_reducer = (state, action) => {
  if (action.type === "GET_FEED_BEGIN") {
    return { ...state, feed_loading: true };
  }
  if (action.type === "GET_FEED_SUCCESS") {
    return {
      ...state,
      feed_loading: false,
      feeds: action.payload.feeds,
      nbPage: action.payload.nbPage
    };
  }
  if (action.type === "GET_FEED_ERROR") {
    return { ...state, feed_loading: false, feed_error: true };
  }
  if (action.type === "HANDLE_PAGE") {
    if (action.payload === "inc") {
      let nextPage = state.page + 1;
      if (nextPage > 2) {
        nextPage = 0;
      }
      return { ...state, page: nextPage };
    }

    if (action.payload === "dec") {
      let prevPage = state.page - 1;
      if (prevPage < 0) {
        prevPage = 2;
      }
      return { ...state, page: prevPage };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
export default app_reducer;
