import Task3 from "./practice2/Task3";

function App() {
  return (
    <>
      <h1>Student Dashboard</h1>

      <Task3
        name="Ramesh"
        age={20}
        course="Computer Science"
        college="ABC College"
        image="https://via.placeholder.com/150"
      />

      <Task3
        name="Priya"
        age={21}
        course="Artificial Intelligence"
        college="XYZ College"
        image="https://via.placeholder.com/150"
      />

      <Task3
        name="Rahul"
        age={19}
        course="Data Science"
        college="PQR College"
        image="https://via.placeholder.com/150"
      />
    </>
  );
}

export default App;