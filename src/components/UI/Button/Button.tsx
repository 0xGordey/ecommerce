import styles from './Button.module.scss'
type props = {
	title: string
	color?: string
}
interface Iprops {
	props: props
}
export default function Button({ props }: Iprops) {
	return <button className={styles.main}>{props.title}</button>
}
