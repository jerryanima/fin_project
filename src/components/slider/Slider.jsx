import css from './Slider.module.css'
import { useSelector } from 'react-redux'

const Slider = props => {
	const sliderList = useSelector(state => state.slider);
	console.log(sliderList);
	
	return (
		<div>wertgyhuj</div>
	)
}

export default Slider
