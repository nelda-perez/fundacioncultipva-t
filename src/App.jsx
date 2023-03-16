import "./App.css";
import { Header } from "./components";
import { Home, NotFound } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
