import React, { useState, useEffect, createContext } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [lang, setLang] = useState(window.localStorage.getItem('lang') || 'uz');

  useEffect(() => {
    window.localStorage.setItem('lang', lang);
  });

  return <Context.Provider value={{ lang, setLang }}>{children}</Context.Provider>;
};
export { Context, Provider };
