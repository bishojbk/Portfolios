import Skills from "./pages/skills/skills";
import Banner from "./pages/banner/banner";
import Footer from "./layouts/footer/footer";
import Navbar from "./layouts/navbar/navbar";
// import Projects from "./pages/projects/projects";
import Contacts from "./pages/contacts/contacts";
// import { Router, Routes } from "react-router-dom";

import "./app.styles.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Skills />
      {/* <Projects /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
