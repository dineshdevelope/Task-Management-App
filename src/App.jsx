import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ReadTask from "./components/ReadTask";
import EditTask from "./components/EditTask";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/read" element={<ReadTask />} />
          <Route path="edit" element={<EditTask />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
