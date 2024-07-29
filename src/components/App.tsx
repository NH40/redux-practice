import { useState } from 'react'
import { useGetRecipesQuery } from '../store/api/api'
import styles from './App.module.scss'
import CreateRecipe from './create-recipe/CreateRecipe'
import Header from './header/Header'
import RecipeItem from './recipe-item/RecipeItem'
import User from './user/User'

function App() {
	const [searchTerm, setSearchTerm] = useState('')
	const [queryTerm, setQueryTerm] = useState('')
	// const { user } = useSelector(state => state.user)
	const { isLoading, data } = useGetRecipesQuery(queryTerm)
	// undefined, {
	// 	skip: user,
	// }

	const handlerSearch = () => {
		setQueryTerm(searchTerm)
	}

	return (
		<section>
			<Header />
			<User />
			<CreateRecipe />
			<div className={styles.search}>
				<div>
					<input
						type='search'
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
						placeholder='Поиск....'
					/>
					<button onClick={handlerSearch}>Поиск</button>
				</div>
			</div>
			<div className={styles.box}>
				{isLoading ? (
					<div className={styles.loading}>Загрузка....</div>
				) : data ? (
					data.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)
				) : (
					<div className={styles.loading}>Not found </div>
				)}
			</div>
		</section>
	)
}

export default App
