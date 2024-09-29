import React, { useRef } from "react";  // Import useRef
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";

const App = () => {
  const subscribeRef = useRef(null);  // Create a ref for the Subscribe section

  // Function to scroll to the Subscribe section
  const scrollToSubscribe = () => {
    subscribeRef.current.scrollIntoView({ behavior: "smooth" });  // Smooth scroll
  };

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero scrollToSubscribe={scrollToSubscribe} />  {/* Pass the scroll function to Hero */}
      <Services />
      <Banner />
      <div ref={subscribeRef}>  {/* Attach ref to Subscribe section */}
        <Subscribe />
      </div>
      <Team />
      <Banner2 />
      <Footer />
    </main>
  );
};

export default App;
