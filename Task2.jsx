const name = "Ramesh";
const age = 20;
const course = "Computer Science";
const college = "ABC College";

const currentYear = new Date().getFullYear();

function Task2(){
  return (
    <div>
      <h1>Student Profile</h1>

      <p>Name: {name}</p>

      <p>Age: {age}</p>

      <p>Course: {course}</p>

      <p>College: {college}</p>

      <p>Current Year: {currentYear}</p>
    </div>
  );
}

export default Task2;