import { useEffect, useState } from "react";
import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList";
import { IRecipe } from './type' 


const App = () => {

  const [tagList, setTagList] = useState<string[]>([])
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [selectedTag, setSelectedTag] = useState(null)

  useEffect(() => {
    async function loadTags() {
      const res = await fetch("https://dummyjson.com/recipes/tags");
      const data = await res.json();
      setTagList(data)
    }
    loadTags()
  }, [])

  async function handleSelectTag(tagName: string) {
    setSelectedTag(tagName)
    const res = await fetch(`https://dummyjson.com/recipes/tag/${tagName}`);
    const data = await res.json();
    setRecipes(data.recipes);
  }

  function goBack() {
    setSelectedTag(null)
    setRecipes([])
  }

  let content;
  if (!selectedTag) {
    content = (
      <>
        <h3>Choose a tag below</h3>
        <RecipeTagList tagList={tagList} onSelectTag={handleSelectTag}/>
      </>
    )
  } else {
    content = (
      <>
        <h2>Recipes for {selectedTag}</h2>
        <div onClick={goBack}>Back</div>
        <RecipeList recipes={recipes}/>
      </>
    )
  }

  return (
    <div>
        <h1>ACME Recipe O'Master</h1>
        {content}
    </div>
  );
};

export default App;
