import { useEffect, useState } from "react";
import RecipeTag from "./RecipeTag";

interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
}

export default function RecipeTagList({ tagList, onSelectTag }: IRecipeTagListProps) {

  return (
    <div>
      {tagList.map((tag) => (
        <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
      ))}
    </div>
  );
}
