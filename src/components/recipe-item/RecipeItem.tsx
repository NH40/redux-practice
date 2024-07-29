import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
import { IRecipe } from '../../types/recipe.types'
import styles from './RecipeItem.module.scss'

interface IRecipeItem {
	recipe: IRecipe
}

function RecipeItem({ recipe }: IRecipeItem) {
	const { favorites } = useFavorites()

	const { toggleFavorites } = useActions()

	const isExists = favorites.some(r => r.id === recipe.id)

	return (
		<div className={styles.item}>
			<img src={recipe.image} alt={recipe.name} width={200} height={200} />
			<h3>{recipe.name}</h3>
			<button onClick={() => toggleFavorites(recipe)}>
				{isExists ? 'удалить из' : 'Добавить в'} избранное
			</button>
		</div>
	)
}

export default RecipeItem
