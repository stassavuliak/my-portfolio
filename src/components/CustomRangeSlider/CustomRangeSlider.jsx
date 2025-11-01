import PropTypes from "prop-types";
import "./CustomRangeSlider.scss";

const CustomRangeSlider = ({ defaultValue = 80 }) => {
  return (
    <div className="slider-wrapper">
      <input
        type="range"
        className="slider"
        defaultValue={defaultValue}
        min={0}
        max={100}
      />
    </div>
  );
};

CustomRangeSlider.propTypes = {
  defaultValue: PropTypes.number,
};

export default CustomRangeSlider;
