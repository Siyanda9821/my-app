function Counter() {
  // React doesn't listen to this variable
  let like = 0;
  return (
    <div>
      <button
        onClick={() => {
          console.log("Clicked...");
          like = like + 1;
          console.log(like);
        }}
      >
        Like
      </button>
      <h1>{like}</h1>
    </div>
  );
}
