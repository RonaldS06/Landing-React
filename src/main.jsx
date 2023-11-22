import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NavbarProvider } from "./components/Navbar/NavbarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </React.StrictMode>
);
