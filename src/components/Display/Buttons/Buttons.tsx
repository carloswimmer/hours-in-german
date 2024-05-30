import { useEffect } from 'react';
import './Buttons.css';
import { useDisplay } from '../../../contexts/display';

export const Buttons = () => {
  const { createNewNumbers, toggleResults } = useDisplay();

  useEffect(() => {
    createNewNumbers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="buttons">
      <button className="btn new-number" onClick={createNewNumbers}>
        Neue Zeit
      </button>
      <button className="btn result" onClick={toggleResults}>
        Lösung
      </button>
    </div>
  );
};
