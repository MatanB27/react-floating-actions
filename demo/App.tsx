import "./App.css";
import { FloatingActions } from "../src/components/FloatingActions/FloatingActions";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#242424",
        height: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
      <h1>Demo - Floating Actions</h1>
      <div className="card"></div>
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
        ]}
        options={{
          animation: "slide",
          // spacing: 70,
          position: "bottom-right",
          theme: "dark",
        }}
      />
    </div>
  );
}

export default App;
