<<<<<<< HEAD
class Colorful extends React.Component {
  render() {
    return <div style={{ color: "red", fontSize: 72 }}>Big Red</div>;
=======
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // method reset
  reset() {
    this.setState({
      // dimulai dari 0
      count: 0,
    });
  }
  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }
  // Change code below this line

  // Change code above this line
  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
>>>>>>> 71b100cd62d1b94053b3f1ddb90ad7f239f49e14
  }
}
