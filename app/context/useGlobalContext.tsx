'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextType {
    eventlistFormTab: string | null; 
  setEventlistFormTab: (eventlistFormTab: string | null) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [eventlistFormTab, setEventlistFormTab] = useState<string | null>('contact-event-tab');

  const value: GlobalContextType = {
    eventlistFormTab,
    setEventlistFormTab,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
