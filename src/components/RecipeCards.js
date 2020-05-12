import React from 'react';
import RecipeCardsStyle from '../cssmodules/RecipeCard.module.css';
import { ActionPanel } from './ActionPanel';

export const RecipeCards = ({ image, title, ingredients, recipeURI = null, deleteUpdateURL, showDeleteAction, 
    showAddAction, addRecipeToList = null, removeRecipeFromList = null }) => {
    return (
        <div id={title} className={"col-lg-4 col-md-4 col-sm-4 mt-4 mb-4 " + RecipeCardsStyle.cardEffect}
            style={{ textAlign: '-moz-center' }}>
            <div className={"card " + RecipeCardsStyle.cardBorder} style={{ width: '20rem' }}>
                <ActionPanel 
                showDeleteAction={showDeleteAction} 
                showAddAction={showAddAction}
                addRecipeToList={addRecipeToList}
                recipeURI={recipeURI}
                removeRecipeFromList={removeRecipeFromList}
                deleteUpdateURL={deleteUpdateURL}
                />
                <img src={image} style={{ maxHeight: '20rem' }} className="card-img-top" alt="No Image Provided" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <ol className="card-text">
                        {ingredients.map((ingredient, index) => (
                            <li key={title + "-" + index}>{ingredient}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}
