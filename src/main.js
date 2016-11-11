const React = require("react");
const ReactDOM = require("react-dom");
const {createStore, combineReducers} = require("redux");
const {Provider} = require("react-redux");

const reducers = require("./reducers");
const App = require("./App");

const store = createStore(
  combineReducers(reducers)
);

const Root = props => <Provider store={store}><App /></Provider>

ReactDOM.render(<Root />, document.getElementById("root"));

store.dispatch({type: "INIT"});
