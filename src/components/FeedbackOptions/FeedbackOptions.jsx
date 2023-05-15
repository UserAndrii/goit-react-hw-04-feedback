import PropTypes from 'prop-types';
import { Button, BtnWrap } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrap>
      {options.map(options => (
        <Button
          key={options}
          type="button"
          name={options}
          onClick={onLeaveFeedback}
        >
          {options}
        </Button>
      ))}
    </BtnWrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
