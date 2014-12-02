const React = require('react/addons');
const EmotionSelector = require('./emotion-selector');

const HappyTrack = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getDefaultProps() {
    return {
      emotion: 3,
      why: ''
    };
  },

  getInitialState() {
    return {emotion: this.props.emotion, why: this.props.why };
  },

  emotionChanged(emotion) {
    this.setState({emotion});
  },

  submit() {
    this.props.onSubmit(this.state);
  },

  render() {
    return (
      <div>
        <h2>How Am I Feeling Today?</h2>
        <EmotionSelector initialEmotion={this.state.emotion} onChange={this.emotionChanged} />

        <label>Why?
          <textarea valueLink={this.linkState('why')}></textarea>
        </label>

        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
});

module.exports = HappyTrack;
