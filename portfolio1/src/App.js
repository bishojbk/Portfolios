import Banner from "./pages/banner/banner";
import Footer from "./layouts/footer/footer";
import Navbar from "./layouts/navbar/navbar";

// import { Router, Routes } from "react-router-dom";

import "./app.styles.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />

      <Footer />
    </div>
  );
}

export default App;
