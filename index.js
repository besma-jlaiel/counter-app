class Counter extends React.Component {
    state = {
        count: 0,
        taps: 0
    }
    increment = () => {
        const { count, taps } = this.state
        this.setState({
            count: count + 1,
            taps: taps + 1
        })
    }
    decrement = () => {
        const { count, taps } = this.state
        if (count === 0) {
            this.setState({
                taps: taps + 1
            })
            return;
        }
        this.setState({
            count: count - 1,
            taps: taps + 1
        })
    }
    resetCount = () => {
        const { count } = this.state
        this.setState({
            count: 0
        })
    }
    resetAll = () => {
        const { count, taps } = this.state
        this.setState({
            count: 0,
            taps: 0
        })
    }
    componentDidMount() {
        console.log('The component was mounted');
    }

    componentDidUpdate() {
        console.log('The component was updated');
    }

    componentWillUnmount() {
        console.log('The component will be unmounted')
    }
    render() {
        const { count, taps } = this.state
        return (
            <div className="counter">
                <h1>Counter</h1>
                <h2 className="count">{count}</h2>
                <h4 className="taps">Total taps: {taps}</h4>
                <div>
                    <button onClick={this.decrement}>Decrement -</button>
                    <button onClick={this.increment}>Increment +</button>
                </div>
                <div>
                    <button className="reset-count" onClick={this.resetCount} >Reset Count</button>
                    <button className="reset-all" onClick={this.resetAll}>Reset All</button>
                </div>

            </div>
        )
    }

}


class App extends React.Component {
    state = {
        showCounter: true

    }
    handleClick = () => {
        this.setState({
            showCounter: !this.state.showCounter
        })


    }


    render() {
        const { showCounter } = this.state
        return (
            <div className="app">
                <button
                    className="toggle-show-counter-btn"
                    onClick={this.handleClick}
                >
                    {showCounter ? 'Hide' : 'Show'} Counter
                </button>
                {showCounter ? <Counter /> : null}
            </div>

        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)