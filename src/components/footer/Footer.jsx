import css from './Footer.module.css'
import WhiteLogo from '../../assets/whiteLogo.svg'

const Footer = props => {
	return (
		<footer className={css.footer}>
			<img src={WhiteLogo} alt="лого скан"/>
			<div className={css.contacts}>
				г. Москва, Цветной б-р, 40<br/>
				+7 495 771 21 11<br/>
				info@skan.ru<br/>
				<div className={css.copy}>
					Copyright. 2022
				</div>
			</div>
		</footer>
	)
}

export default Footer
