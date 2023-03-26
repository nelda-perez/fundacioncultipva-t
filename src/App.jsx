import "./App.css";
import { Header, Footer } from "./components";
import { About, Home, NotFound, RTE } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rte" element={<RTE />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
