class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp",
    };
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        {/* access state */}
        <h1>Hello {this.state.name}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
