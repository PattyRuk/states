import { useState } from "react";

function CounterThree() {
    const [count, setCount] = useState(0);
    const [theme, setColor] = useState("Blue")

    const increement = () => {
        setCount(count + 1);
        setColor("Green");
    };

    const decreement = () => {
        setCount(count - 1);
        setColor("Red");
    };

    const reset = () => {
       setCount(0);
       setColor("Blue")
    }

    return (    
        <section>
            <h2>Functional Components with Use States (Excercise)</h2>
            <div className="counter">
                <input type="button" value="Minus" onClick={decreement}/>
                <input type="text" id="text" value={count} readOnly />
                <input type="text" id="text" value={theme} readOnly />
                <input type="button" value="Plus" onClick={increement}/>

                <input type="button" id="reset" value="Reset" onClick={reset} />
            </div>
        </section>
        
    )
}

export default CounterThree;