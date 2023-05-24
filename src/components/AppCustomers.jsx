import { Link } from "react-router-dom";

const AppCustomers = ({ people, onRemove }) => {
  return (
    <table className="table container mt-5">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>App Purchases</th>
          <th>Delete Customer</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, index) => (
          <tr key={index}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>
              <Link className="btn btn-primary" to={`/customers/${index}`}>
                App Purchases
              </Link>
            </td>
            <td>
              <button
                onClick={() => onRemove(person.firstName)}
                className="btn btn-primary"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppCustomers;
