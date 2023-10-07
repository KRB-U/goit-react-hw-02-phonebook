import { FilterContainer, InputItem, LabelInput } from './Filter.styled';

const Filter = ({ stateValue, stateFromFilter }) => {
  return (
    <FilterContainer>
      <LabelInput>Find contacts by name</LabelInput>
      <InputItem type="text" value={stateValue} onChange={stateFromFilter} />
    </FilterContainer>
  );
};
export { Filter };
