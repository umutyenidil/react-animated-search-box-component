import React from "react";
import styles from './SearchBoxWrapper.module.css';

const SearchBoxWrapper = (props) => {
    return <div className={`${styles['search-box-wrapper']}`}>
        {props.children}
    </div>
};


export default SearchBoxWrapper;