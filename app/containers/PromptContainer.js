const React = require('react');
const ReactRouter = require('react-router');

// the UI bit lives in a separate file
const Prompt = require('../components/Prompt.js');

// just the business logic for the component
const PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState () {
    return {
      username: ''
    };
  },
  handleUpdateUsername (e) {
    this.setState({
      username: e.target.value,
    });
  },
  handleSubmitUser (e) {
    e.preventDefault();
    const username = this.state.username;

    // reset the username to be blank
    this.setState({
      username: '',
    });

    // if we already have player one set, this must be second player..
    // proceed to battle route dudez
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        },
      });
    }
    else { // we need the second player
      this.context.router.push({
        pathname: `/playerTwo/${username}`,
      });
    }
  },
  render () {
      return (
        <Prompt
          onSubmitUser={this.handleSubmitUser}
          onUpdateUsername={this.handleUpdateUsername}
          username={this.state.username}
          header={this.props.route.header} />
      );
  }
});


module.exports = PromptContainer;
