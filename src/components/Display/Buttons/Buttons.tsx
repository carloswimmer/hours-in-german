import { useDisplay } from '../../../hooks/useDisplay';
import './Buttons.css';

export const Buttons = () => {
  const { createNewNumbers, toggleResults } = useDisplay();

  createNewNumbers();

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
