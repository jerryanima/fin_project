
import css from './TariffBlock.module.css'
import { useSelector } from 'react-redux'
import iconCheckMark from '../../assets/iconCheckMark.svg'

const TariffBlock = props => {
	const tariffList = useSelector(state => state.tariffs);

	const optionList = (list) => {
		return(
			list.map(item => {
				return (
					<li key={item}><img className={css.iconCheckmark} src={iconCheckMark} alt='галочка'/>{item}</li>
				)
			})
		)
	}

	return (
		<div className={css.tariffBlocks}>
			{tariffList.map(item => {
					return (
						<div key={item.name} className={css.block} style={{ border: item.active ? `2px solid ${item.color}` : '' }}>
							<div style={{ background: item.color }} className={css.header}>
								<div>
									<h2 className={css.name} style={{ color: item.color === '#000000' ? 'white' : '' }} >{item.name}</h2>
									<p className={css.title } style={{ color: item.color === '#000000' ? 'white' : '' }}>{item.title}</p>
								</div>
								<img className={css.image} src={require(`../../assets/tariff/${item.image}.svg`)} alt={item.image}/>
								{item.active && (<span className={css.active}>Текущий тариф</span>)}
							</div>
							<div className={css.priceinfo}>
								<div className={css.price}>{item.price}</div>
								<div className={css.priceOld}>{item.oldPrice}</div>
							</div>
							<div className={css.credictInfo}>{item.tariffsCredit}</div>
							<div className={css.ttile2}>В тариф входит:</div>
							<div className={css.blockOption}>
								<ul className={css.list}>
									{optionList(item.option)}
								</ul>
							</div>
							<div className={css.blockButton}>
								{item.active && (<button className={css.buttonActive}>Перейти в личный кабинет</button>)}
								{!item.active && (<button className='button'>Подробнее</button>)}
							</div>
						</div>
					)
				})}
		</div>
	)
}

export default TariffBlock
