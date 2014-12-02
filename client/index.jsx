const React = require('react/addons');
const Router = require('react-router');
const {Route, DefaultRoute} = Router;
const Immutable = require('immutable');
const Cursor = require('immutable/contrib/cursor');
const App = require('./components/app');
const NewHappyTrack = require('./components/new-happy-track');
const EditHappyTrack = require('./components/edit-happy-track');

var cursor;
var handler;
// TODO: get from server etc

var entries = Immutable.fromJS([
  {why: 'Someone told me I had a big nose', emotion: 0, date: new Date()},
  {why: 'I got to talk about React!', emotion: 3, date: new Date()}
]);

function cursorChanged(newState, oldState, path) {
  cursor = Cursor.from(newState, cursorChanged);
  render(handler, cursor);
}
cursor = Cursor.from(entries, cursorChanged);

const Empty = React.createClass({
  render() {
    return <p>Select an entry or create a new one.</p>;
  }
});

const routes = (
  <Route path="/" handler={App} >
    <DefaultRoute handler={Empty} />
    <Route name="new" path="entries/new" handler={NewHappyTrack} />
    <Route name="show" path="entries/:id" handler={EditHappyTrack} />
  </Route>
);

// variable to hold the current react router handler
Router.run(routes, function(h, state) {
  handler = h;
  render(handler, cursor);
});

function render(Handler, cursor) {
  React.render(<Handler cursor={cursor} />, document.body.querySelector('.app'));
}
