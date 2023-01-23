import React from "react";
import Header from "./components/Header";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";
import './components/CSS/styles.css'

function App() {
    return (
      <div className='theme-colors'>
        <Header />
        <PortfolioContainer />
        <Footer />
      </div>
    );
  }

export default App;
