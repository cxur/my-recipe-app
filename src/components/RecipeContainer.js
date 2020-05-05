import React from 'react';
import RecipeContainerStyle from '../cssmodules/RecipeContainer.module.css'
import { RecipeCards } from './RecipeCards';

export default function RecipeContainer({ recipesList, source }) {
    return (
        <div className={RecipeContainerStyle.RecipeContainerDiv}>
            <div className="row row-cols-1 row-cols-md-2">
                
                {recipesList.map(recipeData => {
                  return(source==="internet"
                        ?
                       <RecipeCards
                            image={recipeData.recipe.image}
                            title={recipeData.recipe.label}
                            ingredients={recipeData.recipe.ingredientLines}
                        />
                        : <RecipeCards
                            image={recipeData.recipeImage?'data:image/jpg;base64,'+recipeData.recipeImage
                            :recipeData.recipeImageUrl}
                            title={recipeData.recipeName}
                            ingredients={recipeData.recipeIngredients.split(',')}
                        />
                )})}

            </div>
        </div>
    )



}
