import React from 'react'
import styles from './Popular.module.scss'
import Card from '../Products/Card.Product/Card.Product'
export default function Popular() {
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<h1>Popular</h1>
				<h5>Our top selling product that you may like</h5>
			</div>
			<div className={styles.items}>
				{Array.from({ length: 4 }).map((res: any, _) => {
					return (
						<React.Fragment key={_}>
							<Card
								props={{ title: 'Spiced Mint', price: '9.99', url_img: '' }}
							/>
						</React.Fragment>
					)
				})}
			</div>
		</div>
	)
}
