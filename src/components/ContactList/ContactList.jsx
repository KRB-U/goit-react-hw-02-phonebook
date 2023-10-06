const ContactList = ({ arrContacts }) => {
  return (
    <div>
      <ul>
        {arrContacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ContactList };
