import { useReducer } from "react";

function reducer(count, action) {
    switch(action.type) {
        case 'INCREMENT':
            return (count + 1);
        case 'DECREMENT':
            return (count - 1);
        case 'RESET':
            return 0;
        default:
            return count;

    }
}

function CounterFive() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <section>
            <h2>Functional Components with Use Reducer(Better Approach)</h2>
            <div className="counter">
                <input type="button" value="Minus" disabled={count===0} onClick={()=> dispatch({type:'DECREMENT'})}/>
                <input type="text" id="text" value={count} readOnly />
                <input type="button" value="Plus" disabled={count===10} onClick={()=> dispatch({type:'INCREMENT'})}/>
                <input type="button" id="reset"  value="Reset" disabled={count===0} onClick={()=> dispatch({type:'RESET'})}/>
            </div>
        </section>
    );
}

export default CounterFive;