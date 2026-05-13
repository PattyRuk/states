import { useState } from "react";

function CounterTwo() {
    const [count, setCount] = useState(0);

    const increement = () => {
        setCount(count + 1);
        printCount();
    };

    const decreement = () => {
        setCount(count - 1);
        printCount();
    };

    const reset = () => {
       setCount(0);
    }

    const printCount = () => {
        console.log(count);
    };

    return (    
        <section>
            <h2>Functional Components with Use States(Good Practice)</h2>
            <div className="counter">
                <input type="button" value="Minus" onClick={decreement}/>
                <input type="text" id="text" value={count} readOnly />
                <input type="button"  value="Plus" onClick={increement}/>
                <input type="button" id="reset" value="Reset" onClick={reset} />
            </div>
        </section>
        
    )
}

export default CounterTwo;