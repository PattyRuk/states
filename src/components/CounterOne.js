function CounterOne() {
    let count = 0;
   
    const increement = () => {
        count ++;
        printCount();
    };

    const decreement = () => {
        count --;
        printCount();
    };

    const printCount = () => {
        console.log(count);
    };

    return (
        <section>
            <h2>Updating Variable (count) without State (Bad practice)</h2>
            <div className="counter">
                <input type="button" id="btn"  value="Minus" onClick={decreement}/>
                <input type="text" id="text" value={count} readOnly />
                <input type="button" id="btn" value="Plus" onClick={increement}/>
            </div>
        </section>
    )
}

export default CounterOne;