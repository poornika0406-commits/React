import EmployeeCard from "./practice3/EmployeeCard";

function App() {
  return (
      <div>
       
       <h1>Empoyee Profile</h1>
   
 
      <EmployeeCard
        name="Rahul"
        job="Web Developer"
        salary={50000}
        experience={2}
      />

      <EmployeeCard
        name="Priya"
        job="UI Designer"
        salary={45000}
        experience={3}
      />

      <EmployeeCard
        name="Ramesh"
        job="Java Developer"
        salary={60000}
        experience={4}
      />
    </div>
  );
}

export default App;