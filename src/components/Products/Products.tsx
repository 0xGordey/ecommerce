import React from 'react'
import styles from './Products.module.scss'
import Card from './Card.Product/Card.Product'
export default function Products() {
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<h1 className=''>Products</h1>
				<h5 className=''>Order it for you or for your beloved ones </h5>
			</div>
			<div className={styles.items}>
				{Array.from({ length: 8 }).map((res: any, _) => {
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
