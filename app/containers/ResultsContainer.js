const React = require('react');
const PropTypes = React.PropTypes;

const Results = require('../components/Results.js');
const githubHelpers = require('../utils/githubHelpers.js');

const ResultsContainer = React.createClass({
  getInitialState () {
    // state is passed from router to location object on props
    return {
      isLoading: true,
      scores: [],
      playersInfo: this.props.location.state.playersInfo,
    };
  },
  componentDidMount () {
    // returns a promise with an array of scores
    githubHelpers.battle(this.state.playersInfo)
      .then(scores => {
        this.setState({
          scores: scores,
          isLoading: false,
        });
      });
  },
  render () {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.state.playersInfo} />
    );
  }
});


module.exports = ResultsContainer;
