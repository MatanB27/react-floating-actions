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
          { type: "whatsapp", value: "0501234567" },
          { type: "phone", value: "0501234567" },
          { type: "gmail", value: "name@gmail.com" },
          { type: "telegram", value: "username" },
          { type: "googleMaps", value: "Rothschild Blvd 1, Tel Aviv" },
          {
            type: "instagram",
            value: "https://www.instagram.com/your_username",
          },
          { type: "facebook", value: "https://www.facebook.com/your_page" },
          { type: "x", value: "https://x.com/your_profile" },
          { type: "linkedin", value: "https://www.linkedin.com/in/your_name" },
          { type: "github", value: "https://github.com/your_user" },
          { type: "youtube", value: "https://www.youtube.com/@your_channel" },
          { type: "tiktok", value: "https://www.tiktok.com/@your_handle" },
          { type: "twitch", value: "https://www.twitch.tv/your_channel" },
          {
            type: "pinterest",
            value: "https://www.pinterest.com/your_username",
          },
          {
            type: "reddit",
            value: "https://www.reddit.com/user/your_username",
          },
          { type: "discord", value: "https://discord.gg/your_invite_code" },
          {
            type: "snapchat",
            value: "https://www.snapchat.com/add/your_username",
          },
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
