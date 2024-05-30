import { PropsWithChildren, createContext, useContext, useState } from 'react';

interface DisplayContextType {
  hours: number;
  minutes: number;
  showResults: string;
  createNewNumbers: () => void;
  toggleResults: () => void;
}

const DisplayContext = createContext({} as DisplayContextType);

export const DisplayProvider = ({ children }: PropsWithChildren<{}>) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [showResults, setShowResults] = useState('');

  const createNewNumbers = () => {
    const randomHours = Math.floor(Math.random() * 12);
    const randomMinutes = Math.floor((Math.random() * 60) / 5) * 5;
    setHours(randomHours === 0 ? 12 : randomHours);
    setMinutes(randomMinutes);
    setShowResults('');
  };

  const toggleResults = () => {
    setShowResults((prev) =>
      prev === 'show' ? '' : prev === '' ? 'show' : '',
    );
  };

  const value = {
    hours,
    minutes,
    showResults,
    createNewNumbers,
    toggleResults,
  };

  return (
    <DisplayContext.Provider value={value}>{children}</DisplayContext.Provider>
  );
};

export const useDisplay = () => {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error('useDisplay must be used within a DisplayProvider');
  }
  return context;
};
