const AppCustomers = ({ people, onRemove }) => {
  return (
    <table className="table container mt-5">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
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
