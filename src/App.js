import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels/:id" element={<Hotel/>} />
        <Route path="/hotels" element={<List/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
