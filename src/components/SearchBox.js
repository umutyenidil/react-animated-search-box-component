import React from "react";
import SearchBoxWrapper from "./SearchBoxWrapper";
import styles from './SearchBox.module.css';

const SearchBox = (props) => {
    return <SearchBoxWrapper>
        <input type='checkbox' id={`${styles['check']}`}/>
        <div className={`${styles['search-box']}`}>
            <input type='text' placeholder='Type here...'/>
            <label htmlFor={`${styles['check']}`} className={`${styles['icon']}`}>
                <i className='bx bx-search'></i>
            </label>
        </div>
    </SearchBoxWrapper>
}

export default SearchBox;