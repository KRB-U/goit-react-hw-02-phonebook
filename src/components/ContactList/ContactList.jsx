const ContactList = ({ arrContacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {arrContacts.map(({ name, number, id }) => (
          <li key={id} style={{ marginBottom: '10px' }}>
            {name}: {number}
            <button
              onClick={() => onDeleteContact(id)}
              style={{ marginLeft: '15px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ContactList };
