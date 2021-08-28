import { createContext, useState, useContext } from "react";

const SectionContext = createContext();

export const useSectionContext = () => useContext(SectionContext);

// Section is a number between 0 and 6
export const SectionProvider = ({ children }) => {
  const [section, setSection] = useState(0);

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};
