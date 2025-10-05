import { useState, useEffect } from 'react'
import RecipeList from './RecipeList';

interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

export default function RecipeTag({tagName, onSelectTag}: IRecipeTagProps) {
  return (
    <div>
        <div style={{border: '1px solid white', padding: '1rem'}}>
            <div onClick={() => onSelectTag(tagName)}>{tagName}</div>
        </div>
    </div>
  )
}
