import { useSelector, useDispatch } from 'react-redux';
import { Label, Input } from "./Filter.styled";
import { changeFilter, getFilter } from 'redux/filterSlicer';

export const Filter = () => {
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()
  
  return (
    <Label htmlFor='inputFilter'>
      Find contacts by name
      <Input
        name="filter"
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </Label>
  )
};



