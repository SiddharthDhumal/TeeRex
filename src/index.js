import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { SnackbarProvider } from "notistack";
// import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "@mui/system";
// import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { SnackbarProvider } from "notistack";
// import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "@mui/system";
// import theme from "./theme";

// ReactDOM.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <ThemeProvider theme={theme}>
//         <SnackbarProvider
//           maxSnack={1}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "center",
//           }}
//           preventDuplicate>
//           <App />
//         </SnackbarProvider>
//       </ThemeProvider>
//     </React.StrictMode>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

//  <BrowserRouter>
//  <React.StrictMode>

//    <ThemeProvider theme={theme}>
//         <SnackbarProvider
//           maxSnack={1}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "center",
//           }}
//           preventDuplicate>
//           <App />
//         </SnackbarProvider>
//       </ThemeProvider>

//    <App />
//  </React.StrictMode>

//    </BrowserRouter>,
