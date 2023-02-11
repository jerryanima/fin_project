import css from './Header.module.css'
import { Link } from 'react-router-dom';
import ColorLogo from '../../assets/colorLogo.svg';

const Header = () => {
	return (
		<header className={css.header}>
			<img src={ColorLogo} alt='лого скан'/>
			<nav>
				<ul className={css.navList}>
					<li><Link to={'/'} className={css.link}>Главная</Link></li>
					<li><Link to={'/tariff'} className={css.link}>Тарифы</Link></li>
					<li><Link to={'/faq'} className={css.link}>FAQ</Link></li>
				</ul>
			</nav>
			<div className={css.logOut}>
				<Link to={'/authtorization'} className={css.linkRegist}>Зарегистрироваться</Link>
				<hr/>
				<button className={css.buttonLogIn}>Войти</button>
			</div>
		</header>
	)
}

export default Header
