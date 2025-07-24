import "./styles.css";

// Component = UI + Logic
export default function App() {
  // Logic Starts

  // Logic Ends
  return (
    // UI Starts
    <div className="App">
      <Msg name="Jeevan" />
      <Msg name="Ethan" />
      <Msg name="Jamie" />
    </div>
    // UI Ends
  );
}

// Task - Create a component: User
// Pass data from Parent to Child - Props
// Common
function Msg({ name }) {
  return (
    <div>
      <h1>Hello, {name}!!! 🎊</h1>
    </div>
  );
}

function Msg1(props) {
  // const name = "Diyali";
  console.log(props);

  return (
    <div>
      <h1>Hello, {props.name}!!! 🎊</h1>
    </div>
  );
}

// Create a Component
// Component rules
// 1. PascalCase
// 2. return JSX

// name - prop

// sum(4, 5) -> 9
// sum(4, 10) -> 14
