import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import PostsList from "./components/PostsList/PostsList";

function App() {
  return (
    <>
      <Navbar />
      <PostsList />
      <Footer />
    </>
  );
}

export default App;
