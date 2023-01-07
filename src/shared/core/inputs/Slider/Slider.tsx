import { SliderProps } from 'shared/core//inputs/Slider/Slider.types';

import { StyledSlider } from 'shared/core/inputs/Slider/Slider.styles';

export const Slider = (props: SliderProps) => {
	return <StyledSlider {...props} />;
};
