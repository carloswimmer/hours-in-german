import { effect, signal } from '@preact/signals';
import { useDisplay } from '../../../hooks/useDisplay';
import './Result.css';

export const Result = () => {
  const { hours, minutes, showResults } = useDisplay();
  const text = signal(timeMapper(hours.value, minutes.value));

  effect(() => {
    setTimeout(() => {
      text.value = timeMapper(hours.value, minutes.value);
    }, 750);
  });

  return <p className={`answer ${showResults.value}`}>{text}</p>;
};

const timeMapper = (hour: number, minute: number) => {
  const hourMapper: { [key: number]: string } = {
    1: minute === 0 ? 'Ein' : 'Eins',
    2: 'Zwei',
    3: 'Drei',
    4: 'Vier',
    5: 'Fünf',
    6: 'Sechs',
    7: 'Sieben',
    8: 'Acht',
    9: 'Neun',
    10: 'Zehn',
    11: 'Elf',
    12: 'Zwölf',
    13: 'Eins',
  };

  const times: { [key: number]: string } = {
    0: `${hourMapper[hour]} Uhr`,
    5: `Fünf nach ${hourMapper[hour]}`,
    10: `Zehn nach ${hourMapper[hour]}`,
    15: `Viertel nach ${hourMapper[hour]}`,
    20: `Zwanzig nach ${hourMapper[hour]}`,
    25: `Fünf vor halb ${hourMapper[hour + 1]}`,
    30: `Halb ${hourMapper[hour + 1]}`,
    35: `Fünf nach halb ${hourMapper[hour + 1]}`,
    40: `Zwanzig vor ${hourMapper[hour + 1]}`,
    45: `Viertel vor ${hourMapper[hour + 1]}`,
    50: `Zehn vor ${hourMapper[hour + 1]}`,
    55: `Fünf vor ${hourMapper[hour + 1]}`,
  };

  return times[minute];
};
