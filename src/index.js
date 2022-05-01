import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Song from "../src/components/main/Context";
import ListContainer from "./components/main/ListContainer";
import Youtube from "./components/page/Youtube";
import Live from "./components/page/Live";
import NotFound from "./components/page/NotFound";
import Radio from "./components/page/Radio";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ListContainer />}></Route>
          <Route path="music" element={<ListContainer />}></Route>
          <Route path="react-project-mp3" element={<ListContainer />}></Route>
          <Route path="youtube" element={<Youtube />}></Route>
          <Route path="live" element={<Live />}></Route>
          <Route path="radio" element={<Radio />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
