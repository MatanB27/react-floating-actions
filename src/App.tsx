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
          { type: "instagram", value: "my_profile" },
          { type: "facebook", value: "my_page" },
          { type: "x", value: "my_handle" },
          { type: "linkedin", value: "my-profile-url" },
          { type: "github", value: "my_repo" },
          { type: "youtube", value: "my_channel" },
          { type: "discord", value: "invite_code" },
          { type: "google", value: "https://maps.app.goo.gl/..." },
          { type: "pinterest", value: "my_boards" },
          { type: "reddit", value: "my_username" },
          { type: "snapchat", value: "my_snap" },
          { type: "telegram", value: "my_username" },
          { type: "tiktok", value: "my_account" },
          { type: "twitch", value: "my_stream" },
        ]}
        options={{ animation: "slide", spacing: 50 }}
      />
    </>
  );
}

export default App;
