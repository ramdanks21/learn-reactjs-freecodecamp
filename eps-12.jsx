class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
}

// Change code below this line
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Fruits:</h1>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}

// Change code below this line
class Vegetables extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Vegetable:</h1>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
ReactDOM.render(<TypesOfFood />, document.getElementById("challaenge-node"));
