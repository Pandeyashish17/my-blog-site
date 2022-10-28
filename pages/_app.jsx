import "../styles/globals.css";
import { StateContext } from "../context/StateContext";
import Nav from "../components/HOC/Navbar/Navbar";
import Footer from "../components/HOC/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </StateContext>
  );
}

export default MyApp;
