const React = require('react');
const PropTypes = React.PropTypes;
const Link = require('react-router').Link;

const UserDetails = require('./UserDetails.js');
const UserDetailsWrapper = require('./UserDetailsWrapper.js');
const Restart = require('./Restart.js');

const Results = (props) => {
  let winningIndex = 0;
  let losingIndex = 0;
  if (props.isLoading) {
    return (
      <h1>Loading!</h1>
    );
  }

  if (props.scores[0] > props.scores[1]) {
    losingIndex = 1
  }
  else if (props.scores[1] > props.scores[0]) {
    winningIndex = 1;
  }
  else { // it's a tie!
    return (
      <div className="jumbotron col-sm-12 text-center">
        <h1 className="text-center">It's a tie!</h1>
        <Restart />
      </div>
    );
  }

  return (
    <div className="jumbotron col-sm-12 text-center">
      <h1 className="text-center">Results</h1>
      <div className="col-sm-12">
        <UserDetailsWrapper header="winner">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="loser">
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <Restart />
    </div>
  );
};

Results.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
};

module.exports = Results;
