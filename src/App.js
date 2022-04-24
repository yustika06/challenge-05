import "./App.css";
import Card from "./components/Card";
import Layout from "./components/Layout";
import DetailCard from "./components/DetailCard";
import { Routes, Route } from "react-router";
// import Hero from "./components/Hero";
// import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/car" element={<Card />} />
          <Route path="/car/:carId" element={<DetailCard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
