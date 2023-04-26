import React, {useEffect} from "react";
import './App.css';

function App() {
    useEffect(() => {
        let link = document.createElement('link');
        link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <div className="app">
            <div className='box'>
                <input type='checkbox' id='check'/>
                <div className='search-box'>
                    <input type='text' placeholder='Type here...'/>
                    <label htmlFor='check' className='icon'>
                        <i className='bx bx-search'></i>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default App;
