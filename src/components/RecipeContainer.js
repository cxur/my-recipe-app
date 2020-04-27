import React from 'react';
import RecipeContainerStyle from '../cssmodules/RecipeContainer.module.css'

export default function RecipeContainer({ recipesList }) {
    return (
        <div className={RecipeContainerStyle.RecipeContainerDiv}>
            <div className="row row-cols-1 row-cols-md-2">
                {recipesList.map(recipeData => {
                    return (
                        <div id={recipeData.recipe.label} className={"col-lg-4 col-md-4 col-sm-4 mt-4 mb-4 " +RecipeContainerStyle.cardEffect}>
                            <div className={"card "+RecipeContainerStyle.cardBorder}>
                                <img src={recipeData.recipe.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{recipeData.recipe.label}</h5>
                                    <ol className="card-text">
                                        {recipeData.recipe.ingredients.map(ingredient => (
                                            <li key={recipeData.recipe.label}>{ingredient.text}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    )



}
