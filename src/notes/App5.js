// Named Import
// Rename Import (as)
import { double as dbl, quote } from "./shared";
import "./styles.css";

const double = 50;

console.log(dbl(15));
console.log(quote);

// Component = UI + Logic
// Default Export
export default function App() {
  return (
    <div className="App">
      {/* <MsgList /> */}

      <UserList />
    </div>
  );
}

function MsgList() {
  const names = ["Jeevan", "Ethan", "Siya", "Jamie"];
  return (
    <div>
      {names.map((nm) => (
        <Msg name={nm} />
      ))}
    </div>
  );
}

// Smart (Data) & Presentation Component - Pattern
// Task: Use map & Make it DRY
function UserList() {
  const users = [
    {
      name: "Arjun",
      pic: "https://i.pinimg.com/736x/67/b4/96/67b49639339ccdadf672c78cc77a58b9.jpg",
    },
    {
      name: "Chleo",
      pic: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
    },
    {
      name: "Jeevan",
      pic: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      pic: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <div className="user-list-container">
      {users.map((user) => (
        <User {...user} />
      ))}
    </div>
  );
}

function User({ name = "Unknown", pic }) {
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
