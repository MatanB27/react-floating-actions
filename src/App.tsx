import { useState } from "react";
import "./App.css";
import { FloatingActions } from "./components/FloatingActions/FloatingActions";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <FloatingActions
        actions={[
          { type: "whatsapp", value: "+972501234567" },
          { type: "instagram", value: "mybusiness" },
          { type: "email", value: "hello@site.com" },
          { type: "whatsapp", value: "+972501234567" },
          { type: "instagram", value: "mybusiness" },
          { type: "email", value: "hello@site.com" },
        ]}
        options={{ animation: "slide" }}
      />
    </>
  );
}

export default App;
