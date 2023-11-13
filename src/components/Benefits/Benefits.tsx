import styles from './Benefits.module.scss'
import check from '../../../public/checkmark-circle-outline.svg'
import Button from '../UI/Button/Button'
type Items = {
	text1: string
	text2: string
}
export default function Benefits() {
	const items: Items[] = [
		{
			text1: 'Eco-sustainable:',
			text2: 'All recyclable materials, 0% CO2 emissions',
		},
		{
			text1: 'Hyphoallergenic:',
			text2: '100% natural, human friendly ingredients',
		},
		{
			text1: 'Handmade:',
			text2: 'All candles are craftly made with love.',
		},
		{
			text1: 'Long burning:',
			text2: 'No more waste. Created for last long.',
		},
	]
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<div className=' flex justify-start items-start flex-col'>
					<h1 className=' w-96'>Clean and fragrant soy wax</h1>
					<h5>Made for your home and for your wellness</h5>
				</div>
				<div className={styles.check_items}>
					{items.map((res, _) => {
						return (
							<div key={_} className={styles.item}>
								<img src={check} alt='check' />
								<span className=' flex justify-center items-center flex-row'>
									<span className=' font-bold'>{res.text1}</span>
									{res.text2}
								</span>
							</div>
						)
					})}
				</div>
				<div className={styles.bottom}>
					<Button props={{ title: 'Learn more' }} />
				</div>
			</div>
			<div className={styles.right}>
				<img width={540} height={377} src='image.png' alt='img' />
			</div>
		</div>
	)
}
