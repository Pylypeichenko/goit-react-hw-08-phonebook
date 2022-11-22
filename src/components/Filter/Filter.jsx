import { useDispatch } from 'react-redux';

import { setFilter } from '../../redux/actions';

import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterInputChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <Label htmlFor="contactFilter">Find contact by name</Label>
      <Input
        id="contactFilter"
        name="filter"
        type="text"
        onChange={handleFilterInputChange}
      />
    </>
  );
};
