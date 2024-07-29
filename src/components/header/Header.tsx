import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { useFavorites } from '../../hooks/useFavorites'
import styles from './Header.module.scss'

export default function Header() {
	const { favorites } = useFavorites()

	return (
		<header className={styles.header}>
			<div>
				<BsFillBookmarkHeartFill fontSize={18} />
				<span>{favorites.length}</span>
			</div>
		</header>
	)
}
