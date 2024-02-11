class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* Pass the name prop to Welcome component */}
        <Welcome name="John" />
      </div>
    );
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* Access name prop here */}
        <p>
          Hello, <strong>{this.props.name}</strong>!
        </p>
      </div>
    );
  }
}
