import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import styles from './User.module.scss'

const User = () => {
	const { isLoading, user } = useTypedSelector(state => state.user)
	const { getUserById } = useActions()

	return (
		<>
			<div className={styles.user}>
				{isLoading ? <div>Загрузка ...</div> : <h1>User: {user.name}</h1>}
			</div>
			<div className={styles.buttonUser}>
				<button onClick={() => getUserById(1)}>Получить user</button>
			</div>
		</>
	)
}

export default User
