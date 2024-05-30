import "./Display.css";
import { Result } from "./Result/Result";
import { Buttons } from "./Buttons/Buttons";
import { Digits } from "./Digits/Digits";

export const Display = () => {
  return (
    <main className="container">
      <Digits />
      <Buttons />
      <Result />
    </main>
  );
};
