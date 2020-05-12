import React from 'react';
import RecipeContainerStyle from '../cssmodules/RecipeContainer.module.css'
import { RecipeCards } from './RecipeCards';


export default function RecipeContainer({ recipesList, source, addRecipeToList = null, removeRecipeFromList }) {
    return (
        <div className={RecipeContainerStyle.RecipeContainerDiv}>
            <div className="row row-cols-1 row-cols-md-2">
                {console.table(recipesList)}
                {recipesList.map(recipeData => {
                  return(source==="internet"
                        ?
                       <RecipeCards
                            image={recipeData.recipe.image}
                            title={recipeData.recipe.label}
                            ingredients={recipeData.recipe.ingredientLines}
                            recipeURI={recipeData.recipe.uri}
                            showDeleteAction={false} 
                            showAddAction={true}
                            addRecipeToList={addRecipeToList}

                        />
                        : <RecipeCards
                            image={recipeData.recipeImage?'data:image/jpg;base64,'+recipeData.recipeImage
                            :recipeData.recipeImageUrl}
                            title={recipeData.recipeName}
                            ingredients={recipeData.recipeIngredients.split(',')}
                            deleteUpdateURL={recipeData._links.recipe.href}
                            showDeleteAction={true} 
                            showAddAction={false}
                            removeRecipeFromList={removeRecipeFromList}
                        />
                )})}

            </div>
        </div>
    )



}
