const filter_reducer = (state, action) => {
  if (action.type === "LOAD_FEEDS") {
    return {
      ...state,
      all_feeds: [...action.payload],
      filter_feeds: [...action.payload]
    };
  }

  if (action.type === "UPDATE_SORT") {
    return { ...state, sort: action.payload };
  }

  // Sorting feeds
  if (action.type === "SORT_FEEDS") {
    const { sort, filter_feeds } = state;

    let tempFeeds = [...filter_feeds];
    if (sort === "max-likes") {
      tempFeeds = tempFeeds.sort((a, b) => {
        return a.likes - b.likes;
      });
    }
    if (sort === "max-views") {
      tempFeeds = tempFeeds.sort((a, b) => a.views - b.views);
    }
    if (sort === "max-share") {
      tempFeeds = tempFeeds.sort((a, b) => a.shares - b.shares);
    }
    if (sort === "dates") {
      tempFeeds = tempFeeds.sort((a, b) => a.event_date - b.event_date);
    }
    return { ...state, filter_feeds: tempFeeds };
  }
};
export default filter_reducer;
