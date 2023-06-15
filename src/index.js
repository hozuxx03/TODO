import { StrictMode } from "react";
import ReactDom from "react-dom";

const App = () => {
  return <h1>あ</h1>;
};

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
