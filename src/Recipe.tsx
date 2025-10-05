import { useState, useEffect } from 'react'
import { IRecipe } from './type' 

interface IRecipeProps {
    recipeData: IRecipe;
}

export default function Recipe({recipeData}: IRecipeProps) {
    
  return (
    <div style={{border: "1px solid black", padding: "1rem"}}>
        <h2>{recipeData.name}</h2>
        <h3>Ingredients</h3>
        <ul>
            {recipeData.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <h3>Instructions</h3>
        <ol>
            {recipeData.instructions.map((step, i) => (
                <li key={i}>{step}</li>
            ))}
        </ol>
    </div>
  )
}
