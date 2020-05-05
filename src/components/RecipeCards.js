import React from 'react';
import RecipeCardsStyle from '../cssmodules/RecipeCard.module.css';

export const RecipeCards = ({image, title, ingredients}) => {
    return (
             <div id={title} className={"col-lg-4 col-md-4 col-sm-4 mt-4 mb-4 " +RecipeCardsStyle.cardEffect}
             style={{textAlign:'-moz-center'}}>
                            <div className={"card "+RecipeCardsStyle.cardBorder} style={{width:'20rem'}}>
                                <img src={image} style={{maxHeight:'20rem'}} className="card-img-top" alt="No Image Provided" />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <ol className="card-text"> 
                                        {ingredients.map((ingredient,index) => (
                                            <li key={title+"-"+index}>{ingredient}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
    )
}
