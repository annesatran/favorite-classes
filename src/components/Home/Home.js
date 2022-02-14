import React, {useState} from 'react';
import Class from "../Class/Class"
import "./Home.css"

function Home(props) {

    const [value, setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const nvalue = value.trim().toLocaleUpperCase()
        if (nvalue && !favoriteClasses.includes(nvalue)) {
            setClasses(favoriteClasses.concat(nvalue));
            setValue('');
        }
        console.log(favoriteClasses);
    }

    return (
        <div className="main">
            <div>
            <h1>My Favorite Classes!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add favorite class..." value={value} onChange={handleChange}></input>
                <button type="submit">ADD</button>
            </form>
            </div>
            <div className="my-classes">
                {favoriteClasses.map((favClass) => 
                    <Class name={favClass} key={favClass}></Class>
                )}
            </div>
        </div>
    )
}

export default Home;
