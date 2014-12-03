const React = require('react');
const HappyTrack = require('./happy-track');
const Immutable = require('immutable');

const EditHappyTrack = React.createClass({
  componentWillReceiveProps() {
    console.log('did get', arguments);
  },
  submit(updatedEmotion) {
    this.props.cursor.update(function(oldEmotion) {
      //return {why: this.state.why, emotion: this.state.emotion, date: oldEmotion.date};
      return oldEmotion.merge(Immutable.fromJS(updatedEmotion));
    });
  },

  render() {
    console.log('emotions is', this.props.cursor.get('emotion'), 'why is', this.props.cursor.get('why'));
    return (
      <HappyTrack
        onSubmit={this.submit}
        emotion={this.props.cursor.get('emotion')}
        why={this.props.cursor.get('why')}
      />
    );
  }
});

module.exports = EditHappyTrack;
