// import { nanoid } from 'nanoid';

const Filter = ({ stateValue, stateFromFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={stateValue} onChange={stateFromFilter} />
    </label>
  );
};
export { Filter };
