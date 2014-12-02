const React = require('react');
const HappyTrack = require('./happy-track');

const EditHappyTrack = React.createClass({
  submit(updatedEmotion) {
    this.props.cursor.update(function(oldEmotion) {
      return {why: this.state.why, emotion: this.state.emotion, date: oldEmotion.date};
    });
  },

  render() {
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
