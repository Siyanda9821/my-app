import "./styles.css";

// Component = UI + Logic
export default function App() {
  // Logic Starts

  // Logic Ends
  return (
    // UI Starts
    <div className="App">
      <MsgList />

      {/* <UserList /> */}
    </div>
    // UI Ends
  );
}

function MsgList() {
  const names = ["Jeevan", "Ethan", "Siya", "Jamie"];

  console.log(names);
  // Is the code Dry?
  // Array of Strings -> Array of JSX
  // {} -> Interpolation inside
  return (
    <div>
      {names.map((nm) => (
        <Msg name={nm} />
      ))}
    </div>
  );
}

// Smart (Data) & Presentation Component - Pattern

// Smart Component

function UserList() {
  return (
    <div className="user-list-container">
      {/* Props */}
      <User
        name="Arjun"
        pic="https://i.pinimg.com/736x/67/b4/96/67b49639339ccdadf672c78cc77a58b9.jpg"
      />
      <User
        name="Chleo"
        pic="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
      />
      <User
        name="Jeevan"
        pic="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
      />
    </div>
  );
}

// Task - Create a component: User
// Presentation Component (Reuse ⬆️)
function User({ name, pic }) {
  return (
    <div>
      <img className="user-pic" src={pic} alt={name + " profile pic"} />
      <p className="user-name-container">
        Hello, <span>{name}</span>🎉🎉
      </p>
    </div>
  );
}

// Without Destructuring
function User1(props) {
  // Data
  const name = props.name;
  const pic = props.pic;

  return (
    <div>
      <img className="user-pic" src={pic} alt={name + " profile pic"} />
      <p className="user-name-container">
        Hello, <span>{name}</span>🎉🎉
      </p>
    </div>
  );
}

// Common
function Msg({ name }) {
  return (
    <div>
      <h1>Hello, {name}!!! 🎊</h1>
    </div>
  );
}
