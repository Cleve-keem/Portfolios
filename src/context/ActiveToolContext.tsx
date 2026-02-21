"use client";

import React, { createContext, useContext, useState } from "react";

type ToolContextType = {
  activeToolTitle: string;
  setActiveToolTitle: React.Dispatch<React.SetStateAction<string>>;
};

const ToolContext = createContext<ToolContextType | undefined>(undefined);

export default function ActiveToolProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeToolTitle, setActiveToolTitle] = useState("");

  return (
    <ToolContext.Provider value={{ activeToolTitle, setActiveToolTitle }}>
      {children}
    </ToolContext.Provider>
  );
}

export function useActiveToolTitle() {
  const context = useContext(ToolContext);

  if (!context)
    throw new Error("Context can only be used within it's context provider");

  return context;
}
