import "./App.css";
import { Header } from "./components";
import { About, Home, NotFound } from "./pages";
import { Routes, Route } from "react-router-dom";
import {Footer} from "./Componet"

function App() {
  return (
    <div className="hiddenbody">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
