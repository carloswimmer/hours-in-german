import { Display } from './components/Display/Display';
import { DisplayProvider } from './contexts/display';

export function App() {
  return (
    <DisplayProvider>
      <Display />
    </DisplayProvider>
  );
}
