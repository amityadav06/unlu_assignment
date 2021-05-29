import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/app_reducers";
import axios from "axios";

const getLocalStorage = () => {
  let feeds = localStorage.getItem("feeds");
  if (feeds) {
    return JSON.parse(localStorage.getItem("feeds"));
  } else {
    return [];
  }
};


const initialState = {
  feed_loading: false,
  feed_error: false,
  feeds: getLocalStorage(),
  page: 0,
  nbPage: 0
};

const AppContext = React.createContext();

const url1 = "https://www.mocky.io/v2/59b3f0b0100000e30b236b7e";
const url2 = "https://www.mocky.io/v2/59ac28a9100000ce0bf9c236";
const url3 = "https://www.mocky.io/v2/59ac293b100000d60bf9c239";

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "GET_FEED_BEGIN" });
    try {
      const res1 = axios.get(url1);
      const res2 = axios.get(url2);
      const res3 = axios.get(url3);
      axios.all([res1, res2, res3]).then(
        axios.spread((...alldata) => {
          dispatch({
            type: "GET_FEED_SUCCESS",
            payload: {
              feeds: alldata[state.page].data.posts,
              nbPage: alldata[state.page].data.page
            }
          });
          console.log(alldata[0].data.posts, alldata[2].data.page);
        })
      );
    } catch (error) {
      dispatch({ type: "GET_FEED_ERROR" });
    }
  };

  const handlePage = (value) => {
    dispatch({ type: "HANDLE_PAGE", payload: value });
  };

  useEffect(() => {
    fetchData();
  }, [state.page]);
  useEffect(()=>{
    localStorage.setItem("feeds", JSON.stringify(state.feeds));
  },[state.feeds])

  return (
    <AppContext.Provider value={{ ...state, handlePage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
