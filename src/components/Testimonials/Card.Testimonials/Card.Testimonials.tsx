import styles from './Card.module.scss'
import Star from '../../UI/Star/Star'

type props = {
	countStars: number
	comment: string
	name: string
	url_avatar: string
}
interface IProps {
	props: props
}
export default function CardTestimonials({ props }: IProps) {
	return (
		<div className={styles.main}>
			<div className={styles.top}>
				<div className={styles.avatar}>
					<img src={props.url_avatar} alt='avatar' />
				</div>
				<Star active={props.countStars} />
			</div>
			<div className={styles.bottom}>
				<h1>{props.comment}</h1>
				<span>{props.name}</span>
			</div>
		</div>
	)
}
