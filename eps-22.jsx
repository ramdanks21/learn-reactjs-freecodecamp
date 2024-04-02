class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      activeUsers: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273,
      });
    }, 2500);
=======
      name: "Initial State",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: "React Rocks!",
    });
    // Change code above this line
>>>>>>> 71b100cd62d1b94053b3f1ddb90ad7f239f49e14
  }
  render() {
    return (
      <div>
<<<<<<< HEAD
        {/* Change code below this line */}
        <h1>Active Users: {this.state.activeUsers}</h1>
        {/* Change code above this line */}
=======
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
>>>>>>> 71b100cd62d1b94053b3f1ddb90ad7f239f49e14
      </div>
    );
  }
}
