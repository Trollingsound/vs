"use client";
import { createContext, useState } from "react";

export const DashBoardContext = createContext(null);

export const DashProviders = ({ children }) => {
  const [explore, setExplore] = useState(true);
  const [search, setSearch] = useState(false);
  const [download, setDownload] = useState(false);

  return (
    <DashBoardContext.Provider
      value={{ explore, setExplore, search, setSearch, download, setDownload }}
    >
      {children}
    </DashBoardContext.Provider>
  );
};
