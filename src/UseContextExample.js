import React, { useState } from "react"; 
import Welcome from "./WelcomeComponet";
import ChangeNameContext from "./MyContext";

function UseContextExample() {
    const [name, setName] = useState('Itachi');

    const changeName = () => {
        setName('Obito');
    };

    return (
        <>
            <h1>useContext Example</h1>
            <ChangeNameContext.Provider value={{ name, setName }}>
                <Welcome />
            </ChangeNameContext.Provider>
            <button className="button" onClick={changeName} style={{ marginLeft: '10px' }}>
                Change Name
            </button>
        </>
    );
}

export default UseContextExample;
