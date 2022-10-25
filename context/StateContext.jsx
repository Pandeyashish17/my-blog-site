import React, { createContext, useContext, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Context = createContext();
export const StateContext = ({ children }) => {
  const url = "something"
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const aosFunc = () => {
    AOS.init({
      duration: 300,
      easing: "ease-in-sine",
    });
  };

  return (
    <Context.Provider value={{ handleOpen, open, setOpen, aosFunc, url }}>
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);

export default useStateContext;
