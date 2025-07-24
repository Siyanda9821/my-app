import "./styles.css";

// Component = UI + Logic
export default function App() {
  // Logic Starts

  // Logic Ends
  return (
    // UI Starts
    <div className="App">
      {/* <MsgList /> */}

      <UserList />
    </div>
    // UI Ends
  );
}

// Array of Strings -> Array of JSX
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
      {/* Props */}

      {/* Shorthand works only when propname == keyname */}
      {/* Default Value V1 */}
      {/* {users.map((user) => (
        <User name="Unknown" {...user} />
      ))} */}

      {/* Shorthand works only when propname == keyname */}
      {users.map((user) => (
        <User {...user} />
      ))}
    </div>
  );
}

function UserList1() {
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
      abc: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <div className="user-list-container">
      {/* Props */}

      {users.map((user) => (
        <User name={user.name} pic={user.pic} />
      ))}
    </div>
  );
}
// Task - Create a component: User
// Presentation Component (Reuse ⬆️)
// Props - Properties
// Default Value V2
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
