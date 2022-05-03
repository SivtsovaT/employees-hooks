import React, {useState} from "react";
import './search-panel.css';

const SearchPanel = (props) => {
    const [term, setTerm] = useState('')
    const onUpdateSerchMethod = (event) => {
        const term = event.target.value;
        props.onUpdateSearch(term)
        setTerm(term)
    }


    return (
        <input type="text"
               value={term}
               onChange={onUpdateSerchMethod}
               onUpdateSearchMethod={onUpdateSerchMethod}
               className="form-control search-input"
               placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel;