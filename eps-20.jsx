<<<<<<< HEAD
class CampSite extends React.Component {
  constructor(props) {
    super(props);
=======
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp",
    };
>>>>>>> 71b100cd62d1b94053b3f1ddb90ad7f239f49e14
  }
  render() {
    return (
      <div>
<<<<<<< HEAD
        <Camper />
=======
        {/* Change code below this line */}
        {/* access state */}
        <h1> {this.state.name}</h1>
        {/* Change code above this line */}
>>>>>>> 71b100cd62d1b94053b3f1ddb90ad7f239f49e14
      </div>
    );
  }
}
<<<<<<< HEAD
// Change code below this line
const Camper = (props) => <p>{props.name}</p>;

// membuat defaul value props
Camper.defaultProps = {
  name: "CamperBot",
};
// membuat required name
Camper.propTypes = {
  name: PropTypes.string.isRequired,
};
=======
>>>>>>> 71b100cd62d1b94053b3f1ddb90ad7f239f49e14
