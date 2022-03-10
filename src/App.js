import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Color from "./components/Color";
import Buttons from "./components/Buttons";

const RoutesModule = () => {
  const [url, setUrl] = useState("");
  const [colorScheme, setColorScheme] = useState("/");
  const navigate = useNavigate();

  const stateUpdateHandler = (colorSet) => {
    if (colorSet === "crayola") {
      setColorScheme(colorSet);
      navigate(colorSet);
      setUrl(
        "https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json"
      );
    } else if (colorSet === "xkcd") {
      setColorScheme(colorSet);
      navigate(colorSet);

      setUrl(
        "https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/xkcd.json"
      );
    } else if (colorSet === "web") {
      setColorScheme(colorSet);
      navigate(colorSet);

      setUrl(
        "https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json"
      );
    } else {
      setUrl("");
      setColorScheme("/");
      navigate("/");
    }
  };

  return (
    <>
      <div className="header">
        <h1>All the Colors</h1>
        <h2>Pick a Color Scheme</h2>
      </div>
      <Buttons updateState={stateUpdateHandler} />
      <Routes>
        <Route path={colorScheme} element={<Color url={url} />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <RoutesModule />
    </BrowserRouter>
  );
}

export default App;
