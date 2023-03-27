import "./App.css";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <button
        className="home_button"
        onClick={() => {
          navigate("/users");
        }}
      >
        See users
      </button>
      <button
        className="home_button"
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
