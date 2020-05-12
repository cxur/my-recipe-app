import React, { useState, useEffect } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import RecipeContainer from './components/RecipeContainer';
import { NavBar } from './components/NavBar';
import { AddRecipeForm } from './components/AddRecipeForm';
import {
  Switch,
  Route
} from "react-router-dom";
import { Home } from './components/Home';


function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchQueryLocalRecipes, setSearchQueryLocalRecipes] = useState('');
  const [internetRecipes, setInternetRecipes] = useState([]);
  const [localRecipes, setLocalRecipes] = useState([]);
  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false);

  const API_ID = "61772eb7";
  const API_KEY = "d62789c37a3cb47aa897a2aa700ed98d";

  useEffect(() => {
    getRecipesFromInternet();
  }, [searchQuery])

  useEffect(() => {
    getLocalRecipes();
  }, [searchQueryLocalRecipes])

  const getRecipesFromInternet = async () => {
    if (searchQuery) {
      const response = await fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${API_ID}&app_key=${API_KEY}`);
      const data = await response.json();
      console.log('INTERNET RECIPES: ' + data.hits);
      setInternetRecipes(data.hits);
    }

  };
  const getLocalRecipes = async () => {
    if (searchQueryLocalRecipes) {
      const response = await fetch('http://localhost:9005/api/recipeApp/recipe');
      const data = await response.json();
      console.log('LOCAL RECIPES2: ' + data._embedded.recipes);
      setLocalRecipes(data._embedded.recipes);
    }
  };

  const removeRecipeFromList = (recipeUrl) => {

    console.log("deleting ..." + recipeUrl);

    setLocalRecipes(localRecipes.filter(value => value._links.recipe.href !== recipeUrl));
  }

  const addRecipeToList = async (recipeURI) => {


    const toAddRecipeData = internetRecipes.filter(recipe => recipe.recipe.uri === recipeURI)
      .map(recipe => {
        const newRecipeFormData = new FormData();
        newRecipeFormData.append("recipeName", recipe.recipe.label);
        newRecipeFormData.append("recipeUrl", recipe.recipe.shareAs);
        newRecipeFormData.append("recipeIngredients", recipe.recipe.ingredientLines.join());
        newRecipeFormData.append("recipeSource", "internet");
        newRecipeFormData.append("recipeImageUrl", recipe.recipe.image);
        newRecipeFormData.append("appUser", "1");

        return newRecipeFormData;
      });

    const data2 = await dx(toAddRecipeData);
    console.table(localRecipes);
    setLocalRecipes([...localRecipes, data2]);

  }

  async function dx(formData) {
    const response = await fetch('http://localhost:9005/api/recipeApp/recipe/recipeLOCAL', {
      method: 'POST',
      body: formData[0]
    });

    const data = await response.json();

    console.log(data);

    return data;
  }

  const onSubmitSearchQuery = searchQuery => {
    setSearchQuery(searchQuery);
  }

  const onSubmitSearchQueryMyRecipes = searchQuery => {
    setSearchQueryLocalRecipes(searchQuery);
  }

  const onClickAddRecipe = (showFormBoolean) => {
    setShowAddRecipeForm(showFormBoolean);
  }


  return (
    <div className="App">

      <AddRecipeForm
        showForm={showAddRecipeForm}
        onClickAddRecipe={onClickAddRecipe}></AddRecipeForm>
      <NavBar onClickAddRecipe={onClickAddRecipe} />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact path="/find-recipes">
          <SearchBar onSubmitSearchQuery={onSubmitSearchQuery} />
          <RecipeContainer recipesList={internetRecipes}
            source="internet"
            removeRecipeFromList={removeRecipeFromList}
            addRecipeToList={addRecipeToList}
          />
        </Route>
        <Route exact path="/my-recipes">
          <SearchBar onSubmitSearchQuery={onSubmitSearchQueryMyRecipes} />
          <RecipeContainer recipesList={localRecipes}
            source="local"
            removeRecipeFromList={removeRecipeFromList}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
