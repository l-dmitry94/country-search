import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ search, searchParams }) => {
  const currentCountry = searchParams.get('query');
  const [value, setValue] = useState(currentCountry ?? '');

  const changeValue = e => {
    setValue(e.target.value);
  };

  const submitValue = e => {
    e.preventDefault();
    search({ query: value });
    // setValue('');
  };

  return (
    <SearchFormStyled onSubmit={submitValue}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        name="region"
        required
        onChange={changeValue}
        style={{ textTransform: 'capitalize' }}
      >
        <option value={searchParams.get('query')}>{currentCountry}</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
