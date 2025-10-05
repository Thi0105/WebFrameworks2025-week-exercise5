import React from 'react'
import Recipe from './Recipe';
import { IRecipe } from './type' 

interface IRecipeListProps {
    recipes: IRecipe[];
    tagName: string;
    goBack: () => void
}

export default function RecipeList({recipes}: IRecipeListProps) {
  return (
    <div>
        {recipes.map((recipe) => (
            <Recipe key={recipes.id} recipeData={recipe}/>
        ))}
    </div>
  )
}
