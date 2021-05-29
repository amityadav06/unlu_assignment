import React, { useEffect, useReducer, useContext } from "react";
import reducer from "../reducers/filter_reducers";
import { useAppContext } from "./app_context";

const initialSate = {
  sort: "max-likes",
  filter_feeds: [],
  all_feeds: []
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialSate);
  const { feeds } = useAppContext();

  useEffect(() => {
    dispatch({ type: "LOAD_FEEDS", payload: feeds });
  }, [feeds]);

  useEffect(() => {
    dispatch({ type: "SORT_FEEDS" });
  }, [feeds, state.sort]);

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_SORT", payload: value });
  };

  return (
    <FilterContext.Provider value={{ ...state, updateSort }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
