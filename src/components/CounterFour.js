import { Component } from "react";

class CounterFour extends Component {
    state = {count:0, color:"Blue" }

    increement = () => {
        this.setState({
            count: this.state.count + 1,
            color: "Green"
        })
    }

    decreement = () => {
        this.setState({
            count: this.state.count - 1,
            color: "Red"
        })
    }

    render() {
        return (
        <section>
            <h2>Class with State Object (Old Practice)</h2>
            <div className="counter">
                <input type="button" value="Minus" onClick={this.decreement}/>
                <input type="text" id="text" value={this.state.count} readOnly />
                <input type="text" id="text" value={this.state.color} readOnly />
                <input type="button"  value="Plus" onClick={this.increement}/>
                <input type="button" id="reset" value="Reset" onClick={() => {this.setState({ count: 0, color:"Blue" })}}/>
            </div>
        </section>
        )
    }
}

export default CounterFour;