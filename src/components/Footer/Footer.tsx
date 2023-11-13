import styles from './Footer.module.scss'
export default function Footer() {
	return (
		<div className={styles.main}>
			<div className={styles.top}>
				<hr />
				<div className='flex justify-between items-center flex-row'>
					<div className={styles.left}>
						<div>
							<div className='flex justify-start items-center flex-row gap-2'>
								<img
									style={{ width: '60px', height: '60px' }}
									src={'icon.png'}
									alt='logo'
								/>
								<h1>Candleaf</h1>
							</div>
							<h2 className=''>
								Your natural candle made for your home and for your wellness.
							</h2>
						</div>
					</div>
					<div className={styles.right}></div>
				</div>
			</div>
			<div className={styles.bottom}>
				<h5 className=''>©Candleaf All Rights Reserved.</h5>
				<h5 className=''>Designed with by uxbly.</h5>
			</div>
		</div>
	)
}
