const React = require('react');

const ConfirmBattle = require('../components/ConfirmBattle.js');
const githubHelpers = require('../utils/githubHelpers.js');

const ConfirmBattleContainer = React.createClass({
  contextTypes : {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState () {
    return {
      isLoading: true,
      playersInfo: [],
    };
  },
  handleInitiateBattle () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo,
      },
    });
  },
  componentDidMount () {
    const query = this.props.location.query;

    // this will grab our query string as JSON and we can use the names
    // to hit the github API
    const playersInfoPromise = githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]);

    // set the playerInfo from github
    playersInfoPromise.then((player) => {
      this.setState({
        isLoading: false,
        playersInfo: [player[0], player[1]],
      });
    });
  },
  render () {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle} />
    );
  }
});

module.exports = ConfirmBattleContainer;
