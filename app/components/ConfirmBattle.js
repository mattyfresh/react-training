const React = require('react');
const Link = require('react-router').Link;
const PropTypes = React.PropTypes;

const UserDetails = require('./UserDetails.js');
const UserDetailsWrapper = require('./UserDetailsWrapper.js');
const Restart = require('./Restart.js');

// just like print_r
const puke = (obj) => {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
};

const ConfirmPlayers = (props) => {
  return (
    <div className="jumbotron col-sm-12 text-center">
        <h1>Confirm Players</h1>

        <UserDetailsWrapper header='Player One'>
          <UserDetails info={props.playersInfo[0]} />
        </ UserDetailsWrapper>

        <UserDetailsWrapper header='Player Two'>
          <UserDetails info={props.playersInfo[1]} />
        </ UserDetailsWrapper>
        <div className='col-sm-12'>
          <button
            type='button'
            className='btn btn-lg btn-success'
            onClick={props.onInitiateBattle}>Initiate Battle!</button>
          <Restart />
        </div>
      </div>
  );
};

const ConfirmBattle = (props) => {
  let output = <h1> Loading! </h1>;

  if (!props.isLoading) {
    output = <h1> {ConfirmPlayers(props)} </h1>;
  }

  return output;
};

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
};

module.exports = ConfirmBattle;
