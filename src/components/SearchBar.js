import React, {useState} from 'react';
import SearchBarStyle from '../cssmodules/searchBar.module.css';

export default function SearchBar({onSubmitSearchQuery}) {
const [InputSearchValue, setInputSearchValue] = useState("");

const findRecipes = e => {
    e.preventDefault();
    onSubmitSearchQuery(InputSearchValue);
    setInputSearchValue('');
}

const updateInputSearchValue = e => {
    setInputSearchValue(e.target.value);
}


    return (
        <div className={SearchBarStyle.searchFormDiv}>
            <form onSubmit={findRecipes}>
                <input type="text" className="form-control" value={InputSearchValue} onChange={updateInputSearchValue}></input>
                <button type="submit" className="btn btn-primary mb-2">Search</button>
            </form>
        </div>
    )
}
