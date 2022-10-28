import React, { createContext, useContext, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Context = createContext();
export const StateContext = ({ children }) => {
  const url = "https://ashisblog.vercel.app/";
  const [showModal, setShowModal] = useState(false);

  const aosFunc = () => {
    AOS.init({
      duration: 300,
      easing: "ease-in-sine",
    });
  };

  return (
    <Context.Provider value={{ aosFunc, url, showModal, setShowModal }}>
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);

export default useStateContext;
