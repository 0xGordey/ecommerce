import styles from './Header.module.scss'
import logo from '../../../public/icon.svg'
import profile from '../../../public/Profile.svg'
import cart from '../../../public/Cart.svg'
export default function Header() {
	return (
		<div className={styles.main}>
			<div className={styles.logo}>
				<img src={logo} alt='logo' className='' />
				<span className=''>Candleaf</span>
			</div>
			<div className={styles.nav_item}>
				<span className=''>Discovey</span>
				<span className=''>About</span>
				<span className=''>Contact us</span>
			</div>
			<div className={styles.cart}>
				<img width={34} height={34} src={profile} alt='logo' className='' />
				<img width={26} height={26} src={cart} alt='logo' className='' />
			</div>
		</div>
	)
}
