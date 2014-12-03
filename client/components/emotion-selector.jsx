const React = require('react');
const RadioGroup = require('react-radio-group');
const EMOTIONS = require('../emotions');

const EmotionSelector = React.createClass({
  getInitialState() {
    return {selectedEmotion: this.props.initialEmotion};
  },

  renderEmotionSelections(emotions) {
    return emotions.map(this.renderEmotionSelection);
  },

  renderEmotionSelection(emotion, i) {
    return (
      <label>
        {emotion}
        <input type="radio" value={i} />
      </label>
    );
  },

  handleChange(event) {
    var selectedEmotion = event.target.value;
    this.setState({ selectedEmotion });
    this.props.onChange(selectedEmotion);
  },

  render() {
    return (
      <RadioGroup value={this.state.selectedEmotion} onChange={this.handleChange}>
        {this.renderEmotionSelections(EMOTIONS)}
      </RadioGroup>
    );
  }
});

module.exports = EmotionSelector;
