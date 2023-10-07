const Filter = ({ stateValue, stateFromFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={stateValue}
        onChange={stateFromFilter}
        style={{ marginBottom: '15px' }}
      />
    </label>
  );
};
export { Filter };
