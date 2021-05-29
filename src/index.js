import ReactDOM from "react-dom";
import { AppProvider } from "./context/app_context";
import "./mystyle.css";

import App from "./App";
import { FilterProvider } from "./context/filter_context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </AppProvider>,
  rootElement
);
