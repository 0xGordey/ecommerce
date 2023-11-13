import Button from '../UI/Button/Button'
import styles from './Banner.module.scss'

export default function Banner() {
	return (
		<div className={styles.main}>
			<img src='bg-image.png' />
			<div className={styles.body}>
				<div className=' flex justify-start items-center flex-col w-3/5 gap-2'>
					<h1>🌱</h1>
					<h1>The nature candle</h1>
					<p>
						All handmade with natural soy wax, Candleaf is a companion for all
						your pleasure moments{' '}
					</p>
				</div>
				<Button props={{ title: 'Discovery our collection' }} />
			</div>
		</div>
	)
}
