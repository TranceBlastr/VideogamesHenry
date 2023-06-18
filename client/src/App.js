import { Routes, Route } from "react-router-dom";
import { Landing, Home, Form, Detail } from "./views";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
