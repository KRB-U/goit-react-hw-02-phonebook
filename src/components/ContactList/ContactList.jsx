const ContactList = ({ arrContacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {arrContacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ContactList };
