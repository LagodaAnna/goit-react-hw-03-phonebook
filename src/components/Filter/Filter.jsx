import PropTypes from 'prop-types';
import Box from '../Box';
import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Box mt={5}>
      <Label>
        Filter
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </Box>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
