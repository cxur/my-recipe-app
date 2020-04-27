import React from 'react';
import HomeStyle from '../cssmodules/HomeStyle.module.css';

export const Home = () => {
    return (
        <div className={"container position-relative no-gutters " +HomeStyle.background}>
            <div className="pt-5 justify-content-center">
                <h1>Hi!!!!</h1>
                <h3>Are you ready to eat the world out!</h3>
            </div>

            <div className="row justify-content-center">
                <div className={HomeStyle.buttonSec}>
                    <button className="m-1 btn btn-secondary" type="button">Find Recipes</button>
                    <button className="m-1 btn btn-secondary" type="button">Create Recipes</button>
                </div>
            </div>
        </div>
    )
}
