class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        {/* Change code below this line */}
        <NonCitrus />
        {/* Change code above this line */}
        <Citrus />
      </div>
    );
  }
}
class NonCitrus extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div></div>;
  }
}
class Citrus extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div></div>;
  }
}

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
        {/* Change code above this line */}
        <Vegetables />
      </div>
    );
  }
}
