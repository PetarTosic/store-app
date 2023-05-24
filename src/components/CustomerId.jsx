const CustomerId = ({ people, index }) => {
  const person = people[index];
  return <div className="container">{person.firstName}</div>;
};

export default CustomerId;
