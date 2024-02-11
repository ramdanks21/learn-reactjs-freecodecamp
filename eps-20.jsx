class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}
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
