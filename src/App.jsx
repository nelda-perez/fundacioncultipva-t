import "./App.css";
import { Header } from "./components";
import { About, Home, NotFound } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
