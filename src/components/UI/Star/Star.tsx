import React, { useEffect, useState } from 'react'
import styles from './Star.module.scss'
import FullStar from '../../../../public/Star.svg'
import EmptyStar from '../../../../public/_Star.svg'
type StarProps = {
	active: number
}
const FullStarImage = <img src={FullStar} alt='Full star' />
const EmptyStarImage = <img src={EmptyStar} alt='Empty star' />
const Star: React.FC<StarProps> = ({ active = 0 }) => {
	const [items, setItems] = useState<(JSX.Element | null)[]>([])
	useEffect(() => {
		const arr: (JSX.Element | null)[] = []
		for (let i = 0; i < 5; i++) {
			arr.push(i < active ? FullStarImage : EmptyStarImage)
		}
		setItems(arr)
	}, [active])

	return (
		<div className={styles.main}>
			{items.map((element, index) => (
				<React.Fragment key={index}>{element}</React.Fragment>
			))}
		</div>
	)
}

export default Star
