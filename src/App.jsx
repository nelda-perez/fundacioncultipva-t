import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { Header } from "./components";

function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
      </Box>
    </div>
  );
}

export default App;
