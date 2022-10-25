import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { StateContext } from "../context/StateContext";
import Nav from "../components/HOC/Navbar/Navbar";
import Footer from "../components/HOC/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <StateContext>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </StateContext>
    </ThemeProvider>
  );
}

export default MyApp;
