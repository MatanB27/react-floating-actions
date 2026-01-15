import { useState } from "react";
import "./App.css";
import { FloatingActions } from "./components/FloatingActions/FloatingActions";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
          { type: "instagram", value: "https://www.instagram.com" },
          { type: "facebook", value: "https://www.facebook.com" },
          { type: "x", value: "https://twitter.com" },
          { type: "linkedin", value: "https://www.linkedin.com" },
          { type: "github", value: "https://github.com" },
          { type: "youtube", value: "https://www.youtube.com" },
          { type: "discord", value: "invite_code" },
          { type: "pinterest", value: "my_boards" },
          { type: "reddit", value: "my_username" },
          { type: "snapchat", value: "my_snap" },
          { type: "telegram", value: "my_username" },
          { type: "tiktok", value: "my_account" },
          { type: "twitch", value: "my_snap" },
          { type: "telegram", value: "my_username" },
          { type: "tiktok", value: "my_account" },
          { type: "googleMaps", value: "place_id_or_coordinates" },
          { type: "gmail", value: "my_email@gmail.com" },
          { type: "phone", value: "+972501234567" },
        ]}
        options={{
          animation: "radial",
          spacing: 75,
          position: "bottom-right",
          theme: "dark",
        }}
      />
    </>
  );
}

export default App;
