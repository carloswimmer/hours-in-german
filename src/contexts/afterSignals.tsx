import { PropsWithChildren, createContext, useContext } from "react";
import { signal } from "@preact/signals";

interface DisplayContextType {
  hours: number;
  minutes: number;
  showResults: string;
  createNewNumbers: () => void;
  toggleResults: () => void;
}

const DisplayContext = createContext({} as DisplayContextType);

export const DisplayProvider = ({ children }: PropsWithChildren<{}>) => {
  const hours = signal(0);
  const minutes = signal(0);
  const showResults = signal("");

  const createNewNumbers = () => {
    const randomHours = Math.floor(Math.random() * 12);
    const randomMinutes = Math.floor((Math.random() * 60) / 5) * 5;
    hours.value = randomHours === 0 ? 12 : randomHours;
    minutes.value = randomMinutes;
    showResults.value = "";
  };

  const toggleResults = () => {
    showResults.value = this === "show" ? "" : this === "" ? "show" : "";
  };

  const value = {
    hours: hours.value,
    minutes: minutes.value,
    showResults: showResults.value,
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
    throw new Error("useDisplay must be used within a DisplayProvider");
  }
  return context;
};
