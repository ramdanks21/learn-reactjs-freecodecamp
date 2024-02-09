class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>My First React Component!</h1>;
  }
}

// change code below this line

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));
