import './App.css';
import MainLayout from "./Layouts/MainLayout";
import Artists from "./Pages/Artists";
import History from "./Pages/History";
import "./Assets/scss/globals.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/Artists" element={<Artists />} />
          <Route path="/History" element={<History />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
