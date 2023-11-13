import styles from './Card.module.scss'

type props = {
	title: string
	url_img: string
	price: string
}
interface IProps {
	props: props
}

export default function CardProduct({ props }: IProps) {
	return (
		<div className={styles.main}>
			<div className={styles.top}>
				<img width={200} height={150} src='product.png' alt='image product' />
			</div>
			<div className={styles.body}>
				<div className={styles.title}>
					<span>{props.title}</span>
				</div>
				<div className={styles.price}>
					<span>{props.price}$</span>
				</div>
			</div>
		</div>
	)
}
