import React from 'react'
import styles from './Testimonials.module.scss'
import CardTestimonials from './Card.Testimonials/Card.Testimonials'
export default function Testimonials() {
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<h1>Testimonials</h1>
				<h5>Some quotes from our happy customers</h5>
			</div>
			<div className={styles.items}>
				{Array.from({ length: 3 }).map((res: any, _) => {
					return (
						<React.Fragment key={_}>
							<CardTestimonials
								props={{
									url_avatar:
										'https://static.vecteezy.com/system/resources/previews/026/976/809/non_2x/3d-icon-cute-young-avatar-business-woman-or-office-worker-stands-and-holds-work-documents-folder-people-character-illustration-cartoon-minimal-style-on-isolated-transparent-generative-ai-png.png',
									countStars: 3,
									name: 'Lisa',
									comment: '“I love it! No more air fresheners”',
								}}
							/>
						</React.Fragment>
					)
				})}
			</div>
		</div>
	)
}
