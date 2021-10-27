import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";
function App() {
  const [aboutSelected, setAboutSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div className="App">
      <Navbar
        setAboutSelected={setAboutSelected}
        setPortfolioSelected={setPortfolioSelected}
        setContactSelected={setContactSelected}
        setResumeSelected={setResumeSelected}
      />
      <main>
        {!portfolioSelected &&
          !contactSelected &&
          !resumeSelected &&
          !aboutSelected && <AboutMe />}
        {aboutSelected && <AboutMe />}
        {portfolioSelected && <Portfolio />}
        {contactSelected && <ContactMe />}
        {resumeSelected && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
