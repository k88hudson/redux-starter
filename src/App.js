const React = require("react");
const {connect} = require("react-redux");

const DEFAULT_TYPES = [
  {id: "cat", label: "Cat"},
  {id: "dog", label: "Dog"},
  {id: "fish", label: "Fish"}
];

const App = React.createClass({
  render() {
    return (<form className="form">
      <h1>Buy pet</h1>

      <div className="form-group">
        <label><input type="radio" /> Cute</label>
        <label><input type="radio" /> Scary</label>
      </div>

      <div className="form-group">
        <label>What kind of pet?</label>
        <select>
          {DEFAULT_TYPES.map(type => (
            <option key={type.id} value={type.id}>{type.label}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>How many?</label>
        <input type="number" />
      </div>
    </form>);
  }
});

module.exports = connect(state => state)(App);
