import "./styles.css";

// Component = UI + Logic
// C = f(S)
export default function App() {
  // Logic Starts
  const name = "Luvuyo";

  // Logic Ends
  return (
    // UI Starts
    <div className="App">
      <h1>Hello, {name}!!!🎊</h1>

      <label htmlFor="name">Name: </label>
      <input type="text" placeholder="Tony" id="name" />
    </div>
    // UI Ends
  );
}

// {} - interpolation

// class (HTML) -> className (JSX)
// XML
// Not HTML
// JSX -> JavaScript XML  -> JS (Babel)

// JS (Reserved word)
// 1. class (Keyword) -> className
// 2. for  -> htmlFor
