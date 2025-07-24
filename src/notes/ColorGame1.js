import { useState } from "react";
import { MsgList } from "./MsgList";
import "./styles.css";
import { UserList } from "./UserList";

// Component = UI + Logic
// Default Export
export default function App() {
  console.log("Hi");
  return (
    <div className="App">
      {/* <MsgList /> */}

      {/* <UserList /> */}

      <ColorGame />
    </div>
  );
}

// State Changes -> Update UI (useState)
// Typing event -> Listens -> onChange, onInput, onKeyPress
// onChange -> Works Text, Checkbox, Radio, etc

// event.target -> Where event originate from
// C = f(S) | State Changes Component re-renders
function ColorGame() {
  const [color, setColor] = useState("");

  // Clue: Inline Style
  const styles = {
    background: color,
    fontSize: "24px",
  };

  // Task 1.1 - List these colors using ColorBox - map
  const [colors, setColors] = useState(["pink", "orange", "purple", "crimson"]);
  // console.log("Re-rendered");

  return (
    <div>
      <div className="color-form-container">
        <input
          style={styles}
          onChange={(event) => setColor(event.target.value)}
          type="text"
          placeholder="Your fav color.."
        />
        {/* Task 1.2 Add Box to the List */}

        {/* Copy the existing colors + New color */}
        <button onClick={() => setColors([...colors, color])}>➕ Add</button>
      </div>

      {/* Dictate from Parent the UI */}
      <div className="color-box-list-container">
        {colors.map((clr) => (
          <ColorBox clr={clr} />
        ))}
      </div>
    </div>
  );
}

// Pass data from Parent -> Child (Prop)
function ColorBox({ clr }) {
  const styles = {
    background: clr,
    height: "25px",
    width: "250px",
  };

  return <div style={styles}></div>;
}
