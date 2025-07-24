// EventListner - Browser - onclick -> onClick
// user clicks on button -> onClick -> callbackFn called
// React listens to hook variable

// Hooks - function - All of them starts with 'use'
// Component = F(state)
function Counter() {
  // React doesn't listen to this variable
  // let like = 0;
  // Destructuring
  const [like, setLike] = useState(10);
  // const [state, setState] = useState(Initial Value);
  // setLike -> updates the like
  console.log("Re-rendered...");

  // Task: Dislike button - Youtube
  return (
    <div>
      <button aria-label="like button" onClick={() => setLike(like + 1)}>
        👍 {like}
      </button>
    </div>
  );
}

// State of the App -> Current Value (Data) in the App
