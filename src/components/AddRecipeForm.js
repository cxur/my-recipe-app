import React, { useState } from 'react';
import AddRecipeFormStyle from '../cssmodules/AddRecipeFormStyle.module.css'

export const AddRecipeForm = ({ showForm = false, onClickAddRecipe }) => {

    const [recipeName, setRecipeName] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeURLPicture, setRecipeURLPicture] = useState('');
    const [recipeUploadPicture, setRecipeUploadPicture] = useState('');

    const saveRecipe = () => {
        console.log("Saved");
    }   

    const closeAddRecipeForm = () => {
        setRecipeName('');
        setRecipeIngredients('');
        setRecipeURLPicture('');
        setRecipeUploadPicture('');
        onClickAddRecipe(false);
    }


    return (
        <div>
            <form onSubmit={saveRecipe} className={showForm ? AddRecipeFormStyle.recipeFormShow : AddRecipeFormStyle.recipeFormShow +' ' +AddRecipeFormStyle.recipeFormHide}>
                <div className="form-group">
                    <label htmlFor="recipeName">Recipe Name:</label>
                    <input type="text" className="form-control" id="recipeName" name="recipeName" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="recipeIngredients">Ingredients:</label>
                    <textarea rows="6" cols="6" className="form-control" id="recipeIngredients" name="recipeIngredients" value={recipeIngredients} onChange={(e) => setRecipeIngredients(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="recipeURLPicture">Image Url:</label>
                    <input type="text" className="form-control" id="recipeURLPicture" name="recipeURLPicture" value={recipeURLPicture} onChange={(e) => setRecipeURLPicture(e.target.value)} />
                </div>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="recipeUploadPicture" name="recipeUploadPicture" value={recipeUploadPicture} onChange={(e) => setRecipeUploadPicture(e.target.value)} />
                    <label className="custom-file-label" htmlFor="recipeUploadPicture">Choose file</label>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeAddRecipeForm}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={saveRecipe}>Save changes</button>
                </div>
            </form>
        </div>
    )
}
