import { Routes, Route, useLocation } from "react-router-dom";
import { Landing, Home, Form, Detail } from "./views";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Form />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
