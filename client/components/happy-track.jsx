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
    console.log('props is', this.props);
    return {emotion: this.props.emotion, why: this.props.why };
  },

  componentWillReceiveProps(props) {
    console.log('got props', arguments);
    this.setState({emotion:props.emotion, why:props.why});
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
