const Home = () => {
  const handleClick = () => {
    alert("hello");
  };
  const handleClickAgain = (name) => {
    alert("hello " + name);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClickAgain("Jeff")}>Click</button>
    </div>
  );
};

export default Home;
