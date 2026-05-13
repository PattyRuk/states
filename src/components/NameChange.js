import { useState } from "react";

function NameChange() {

    const [name, setName] = useState(" ");

    const nameInput = (event) => {
        setName(event.target.value);
    };

    return (
        <section>
            <h2>Welcome to React {name}</h2>
            <div className="counter">
                <input type="text"  className="word-input" placeholder="Enter Name Here.." onChange={nameInput}/>
            </div>
        </section>
    )
}

export default NameChange;