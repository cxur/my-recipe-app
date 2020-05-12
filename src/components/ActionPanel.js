import React from 'react';
import ActionPanelStyle from '../cssmodules/ActionPanelStyle.module.css';



export const ActionPanel = ({ showDeleteAction, showAddAction,
    addRecipeToList = null, recipeURI= null, removeRecipeFromList = null, showDetails, deleteUpdateURL}) => {

    const deleteRecipe = async (deleteURL) => {
        const response = await fetch(deleteURL, {
            method: 'DELETE'
        });

        response.ok ? removeRecipeFromList(deleteURL): console.log("Error");
        
    }

    const addRecipe = (recipeURI) => {

        addRecipeToList(recipeURI);
    }

    return (
        <div className={ActionPanelStyle.buttonContainer}>
            {showDeleteAction ? <button onClick={() => deleteRecipe(deleteUpdateURL)} type="button"><svg className={ActionPanelStyle.svgActionPanel}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 
            .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 
            1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 
            1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 
            2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"/></svg></button> : null}


            {showAddAction ? <button onClick={() => addRecipe(recipeURI)} type="button"><svg className={ActionPanelStyle.svgActionPanel}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 
                4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 
                12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg></button> : null}


            <button onClick={showDetails} type="button"><svg className={ActionPanelStyle.svgActionPanel}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 
                10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 
                18h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"/></svg></button>

        </div>
    )
}
