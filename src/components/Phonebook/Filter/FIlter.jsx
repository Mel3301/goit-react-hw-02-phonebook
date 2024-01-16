import styled from "styled-components";

const Filter = ({ value, onChange }) => (
  <FilterContainer>
    <label htmlFor="filter">Search contacts</label>
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="Search"
    />
  </FilterContainer>
);

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export default Filter;
