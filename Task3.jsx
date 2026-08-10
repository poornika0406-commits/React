function Task3({ name, age, course, college, image }) {
  return (
    <div>
      <img src={image} alt={name} width="150" />

      <h2>Student Profile</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>College: {college}</p>
    </div>
  );
}

export default Task3;