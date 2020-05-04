import React, { useState, useReducer } from 'react';
import AddRecipeFormStyle from '../cssmodules/AddRecipeFormStyle.module.css'

export const AddRecipeForm = ({ showForm = false, onClickAddRecipe }) => {

    // const [recipeName, setRecipeName] = useState('');
    // const [recipeIngredients, setRecipeIngredients] = useState('');
    // const [recipeURLPicture, setRecipeURLPicture] = useState('');
    // const [recipeUploadPicture, setRecipeUploadPicture] = useState('');
    const initialState = {
        recipeName: '',
        recipeUrl: '',
        recipeIngredients: '',
        recipeSteps: '',
        recipeSource: '',
        recipeURLPicture: '',
        recipeImage: '',
        appUser: '1'
    }
    const [recipeInput, setRecipeInput] = useReducer((state, newState) => ({ ...state, ...newState }),initialState)

    const handleInputChange = event => {
        const fieldName = event.target.name;
        const fieldValue = fieldName === "recipeImage" ? 
        event.target.files[0]:event.target.value;

        setRecipeInput({ [fieldName]: fieldValue });
    }

    const saveRecipe = async () => {

        const formData = new FormData();

        Object.keys(recipeInput).forEach(key => formData.append(key, recipeInput[key]));
        const response = await fetch('http://localhost:9005/api/recipeApp/recipe/recipeLOCAL', {
            method: 'POST',
            body:formData
        });

        const data = await response.json();
        setRecipeInput({...initialState});
        closeAddRecipeForm();
        console.log(data);
    }

    const closeAddRecipeForm = () => {
        setRecipeInput({...initialState});
        onClickAddRecipe(false);
    }

    return (
        <div>
            <form encType="multipart/form-data" onSubmit={saveRecipe} className={showForm ? AddRecipeFormStyle.recipeFormShow :
                 AddRecipeFormStyle.recipeFormShow + ' ' + AddRecipeFormStyle.recipeFormHide}>
                <div className={AddRecipeFormStyle.formHeader}>
                    Create Recipe
                </div>
                <hr></hr>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="recipeName">Recipe Name:</label>
                        <input type="text" className="form-control" id="recipeName" name="recipeName"
                            value={recipeInput.recipeName} onChange={handleInputChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="recipeUrl">Recipe Url:</label>
                        <input type="text" className="form-control" id="recipeUrl" name="recipeUrl"
                            value={recipeInput.recipeUrl} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="recipeIngredients">Ingredients:</label>
                        <textarea rows="3" cols="6" className="form-control" id="recipeIngredients" name="recipeIngredients"
                            value={recipeInput.recipeIngredients} onChange={handleInputChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="recipeIngredients">Instructions:</label>
                        <textarea rows="3" cols="6" className="form-control" id="recipeSteps" name="recipeSteps"
                            value={recipeInput.recipeSteps} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-group">
                    <input type="hidden" value="local" className="form-control" id="recipeSource" name="recipeSource"
                     onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="recipeURLPicture">Image Url:</label>
                    <input type="text" className="form-control" id="recipeURLPicture" name="recipeURLPicture" 
                    value={recipeInput.recipeURLPicture} onChange={handleInputChange} />
                </div>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="recipeImage" name="recipeImage" 
                    onChange={handleInputChange} />
                    <label className="custom-file-label" htmlFor="recipeImage">Personalize Image</label>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeAddRecipeForm}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={saveRecipe}>Save changes</button>
                </div>
            </form>
        </div>
    )
}
