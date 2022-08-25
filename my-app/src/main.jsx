import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./Context/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
      </AppContextProvider>
  </React.StrictMode>
);
