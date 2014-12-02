const React = require('react');
const Router = require('react-router');
const EMOTIONS = require('../emotions');

const App = React.createClass({
  mixins: [Router.State, Router.Navigation],

  showEntryForm() {
    this.transitionTo('new');
  },

  renderEntry(entry, i) {
    return (
      <li>
        <Router.Link to="show" params={{id: i}}>
          {EMOTIONS[entry.get('emotion')]} - {entry.get('date').toDateString()}
        </Router.Link>
      </li>
    );
  },

  renderEntries(entries) {
    var renderedEntries = this.props.cursor.map(this.renderEntry);
    return (
      <div>
        <h3>Previous Entries</h3>
        <ul>
          {renderedEntries.toJS()}
        </ul>
      </div>
    );
  },

  renderChildRoute() {
    var isRenderingChildEmotion = this.getParams().id != null;
    if (isRenderingChildEmotion) {
      return <Router.RouteHandler cursor={this.props.cursor.get(this.getParams().id)} />
    } else {
      // we don't have a cursor for this value specifically so just pass
      // the whole cursor down
      return <Router.RouteHandler cursor={this.props.cursor}/>
    }
  },

  render() {
    return (
      <div className="row">
        <div className="small-3 columns">
          <div className="row">
            {this.renderEntries()}
          </div>
          <div className="row">
            <button onClick={this.showEntryForm}>Add Entry</button>
          </div>
        </div>
        <div className="small-9 columns">
          {this.renderChildRoute()}
        </div>
      </div>
    );
  }
});

module.exports = App;
