import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <button
        onClick={() => {
          navigate("/users");
        }}
      >
        See users
      </button>
      <button
        onClick={() => {
          navigate("/bookings");
        }}
      >
        See bookings
      </button>
    </div>
  );
}

export default App;
