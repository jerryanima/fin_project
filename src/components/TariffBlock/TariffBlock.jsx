
import css from './TariffBlock.module.css'
import { useSelector } from 'react-redux'

const TariffBlock = props => {
	const tariffList = useSelector(state => state.tariffs);
	console.log(tariffList);

	return (
		<div className={css.tariffBlocks}>
			{tariffList.map(item => {
					return (
						<div key={item.name} className={css.block}>
							<div style={{ background: item.color }} className={css.header}>
								<div>
									<h2 className={css.name} style={{ color: item.color === '#000000' ? 'white' : '' }} >{item.name}</h2>
									<p className={css.title } style={{ color: item.color === '#000000' ? 'white' : '' }}>{item.title}</p>
								</div>
								<img className={css.image} src={require(`../../assets/tariff/${item.image}.svg`)} alt={item.image}/>
							</div>
							<div className={css.priceinfo}>
								<div className={css.price}>{item.price}</div>
								<div className={css.priceOld}>{item.oldPrice}</div>
							</div>
							<div className={css.credictInfo}>{item.tariffsCredit}</div>
							<div className={css.ttile2}>В тариф входит:</div>
							
							<div></div>
						</div>
					)
				})}
		</div>
	)
}

export default TariffBlock
