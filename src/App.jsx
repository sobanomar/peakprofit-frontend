import Router from "./Router";
import "./App.css";
import { LenisProvider } from "./utils/LenisContext";

function App() {
  return (
    <LenisProvider>
      <Router />
    </LenisProvider>
  );
}

export default App;
