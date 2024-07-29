import { FormEvent, useState } from 'react'
import { useCreateRecipeMutation } from '../../store/api/recipe.api'
import { IRecipeData } from '../../types/recipe.types'

const defaultValue: IRecipeData = {
	name: '',
	image: '',
}

export default function CreateRecipe() {
	const [recipe, setRecipe] = useState<IRecipeData>(defaultValue)

	const [createRecipe] = useCreateRecipeMutation()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		createRecipe(recipe).then(() => {
			setRecipe(defaultValue)
		})
	}

	return (
		<div>
			<form
				onSubmit={e => {
					handleSubmit
				}}
			>
				<p>Создать новый рецепт:</p>
				<label>
					<input
						type='text'
						placeholder='Название'
						value={recipe.name}
						onChange={e => setRecipe({ ...recipe, name: e.target.value })}
					/>
				</label>
				<label>
					<input
						type='text'
						placeholder='Изображение'
						value={recipe.image}
						onChange={e => setRecipe({ ...recipe, image: e.target.value })}
					/>
				</label>
				<button type='submit'>Создать</button>
			</form>
		</div>
	)
}
