import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";
import { ContadorRed } from "./components/ContadorRed";
import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <Usuario />
      <hr />
      <h2>useEffect - useRef</h2>
      <TimerPadre />
      <hr />
      <h2>use Reducer</h2>
      <ContadorRed />
      <hr />
      <h2>Custom Hooks</h2>
      <Formulario />
      <Formulario2 />
    </>
  );
}

export default App;
