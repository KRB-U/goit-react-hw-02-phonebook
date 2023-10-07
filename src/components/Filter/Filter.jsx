import { FilterContainer, LabelInput } from './Filter.styled';

const Filter = ({ stateValue, stateFromFilter }) => {
  return (
    <FilterContainer>
      <LabelInput>
        Find contacts by name
        <input type="text" value={stateValue} onChange={stateFromFilter} />
      </LabelInput>
    </FilterContainer>
  );
};
export { Filter };
