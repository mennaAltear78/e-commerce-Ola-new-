import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
//import InternetConnectionProvider from "./Provider/InternetConnectionProvider.jsx";

const queryClint = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
createRoot(document.getElementById("root")).render(
 
    // <InternetConnectionProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClint}>
          <ChakraProvider>
            <Router>
              <App />
            </Router>
          </ChakraProvider>
        </QueryClientProvider>  
        
      </Provider>
    // </InternetConnectionProvider>
 
);
