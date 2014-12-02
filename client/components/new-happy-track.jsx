const React = require('react');
const HappyTrack = require('./happy-track');

const NewHappyTrack = React.createClass({
  submit(emotion) {
    this.props.cursor.update(function(emotionsList) {
      emotion.date = new Date();
      return emotionsList.push(Immutable.fromJS(emotion));
    });
  },

  render() {
    return (
      <HappyTrack
        onSubmit={this.submit}
      />
    );
  }
});


module.exports = NewHappyTrack;
