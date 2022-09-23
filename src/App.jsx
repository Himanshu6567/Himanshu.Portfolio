import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MyProject from "./MyProject";
import Home from "./Home";
import MySkill from "./MySkill";
import Aboutme1 from "./Aboutme1";
import Codeyogi from "./Codeyogi";
import Contect from "./Contect";
import LetsTalk from "./LetsTalk";

function App() {
  return (
    <div className="bg-gray-200 ">
      <Navbar />
      <Home></Home>

      <Aboutme1 />
      <MySkill />
      <MyProject />
      <LetsTalk />
      <Codeyogi />
      <Contect />
      <Footer />
    </div>
  );
}
export default App;
