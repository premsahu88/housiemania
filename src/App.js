import "./App.css";

import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import GooglePlay from "./components/google-play/GooglePlay";
import ContactUs from "./components/contact/ContactUs";
import PowerBy from "./components/power-by/PowerBy";
import Footer from "./components/footer/Footer";
import FAQ from "./components/faq/Faq";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <GooglePlay></GooglePlay>
      <ContactUs></ContactUs>
      <FAQ></FAQ>
      <PowerBy></PowerBy>
      <Footer></Footer>

      
    </>
  );
}

export default App;
