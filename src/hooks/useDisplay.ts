import { signal } from '@preact/signals';

const hours = signal(0);
const minutes = signal(0);
const showResults = signal('');

export const useDisplay = () => {
  const createNewNumbers = () => {
    const randomHours = Math.floor(Math.random() * 12);
    const randomMinutes = Math.floor((Math.random() * 60) / 5) * 5;

    hours.value = randomHours === 0 ? 12 : randomHours;
    minutes.value = randomMinutes;
    showResults.value = '';
  };

  const toggleResults = () => {
    showResults.value = showResults.value === 'show' ? '' : 'show';
  };

  return {
    hours,
    minutes,
    showResults,
    createNewNumbers,
    toggleResults,
  };
};
