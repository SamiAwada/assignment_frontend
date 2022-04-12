import './App.css';
import MainLayout from "./Layouts/MainLayout";
import Artists from "./Pages/Artists";
import History from "./Pages/History";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainLayout />
      <Routes>
        <Route path="/Artist" element={<Artists />} />
        <Route path="/History" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
