function EmployeeCard({ name, job, salary, experience }) {
  return (
    <div>
      <h2>{name}</h2>

      <p>Job: {job}</p>

      <p>Salary: ₹{salary}</p>

      <p>Experience: {experience} years</p>
    </div>
  );
}

export default EmployeeCard;