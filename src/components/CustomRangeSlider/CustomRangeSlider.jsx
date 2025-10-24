import React from "react";
import styled from "styled-components";

// Constants
const height = "34px";
const thumbHeight = 33;
const trackHeight = "12px";

// Colours
const upperColor = "#edf5f9";
const lowerColor = "#FD6F00";
const thumbColor = "#FD6F00";
const thumbHoverColor = "#EB6801";
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

// Helper function for long shadow
const makeLongShadow = (color, size) => {
  let i = 18;
  let shadow = `${i}px 0 0 ${size} ${color}`;
  for (; i < 706; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
  }
  return shadow;
};

// Styled Components
const Wrapper = styled.div`
  margin: 8px 0 15px;
  max-width: 700px;
`;

const Range = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  width: 100%;
  margin: 0;
  height: ${height};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(upperColor, "-10px")};
    transition: background-color 150ms;
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground};
  }

  &::-moz-range-progress {
    background: ${lowerBackground};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    color: transparent; /* Hides track marks */
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${lowerBackground};
  }

  &::-ms-fill-upper {
    background: ${upperBackground};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover,
  &:focus {
    &::-webkit-slider-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-moz-range-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-ms-thumb {
      background-color: ${thumbHoverColor};
    }
  }
`;

const CustomRangeSlider = ({defaultValue = 80}) => {
  return (
    <Wrapper>
      <Range type="range" defaultValue={defaultValue} min={0} max={100}/>
    </Wrapper>
  );
};

export default CustomRangeSlider;
