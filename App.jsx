function Welcome() {
  return <h1>My React Learning Journey Starts from today</h1>;
}
function Skills() {
  return <h2>This is my skill enhancement</h2>;
}

function Message(){
  return<p>Maintain this courage and be consistent </p>;
}
function App() {
  return (
    <div>
      <Welcome />
      <Skills/>
      <Message />
    </div>
  );
}

export default App;
