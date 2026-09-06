import React, { createContext, useContext, useState } from "react";

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [dateData, setDateData] = useState({
    location: "",
    date: "",
    time: "",
  });

  return (
    <DateContext.Provider
      value={{
        dateData,
        setDateData,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => {
  return useContext(DateContext);
};