class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      message: "",
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener("keydown ", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown ", this.handleKeyPress);
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + "You pressed the enter key! ",
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
=======
      text: "Hello",
    };
    this.handleClick = this.handleClick.bind(this);
    // Change code below this line

    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!",
    });
>>>>>>> 71b100cd62d1b94053b3f1ddb90ad7f239f49e14
  }
  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>{this.state.message}</h1>
=======
        {/* Change code below this line */}
        <button onClick={this.handleClick}>Click Me</button>
        {/* Change code above this line */}
        <h1>{this.state.text}</h1>
>>>>>>> 71b100cd62d1b94053b3f1ddb90ad7f239f49e14
      </div>
    );
  }
}
