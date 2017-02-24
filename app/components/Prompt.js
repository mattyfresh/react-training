const React = require('react');
const PropTypes = React.PropTypes;


/* 'Functional Stateless Components (aka just returning a function)' */
const Prompt = (props) => {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Enter Github Username"
              type="text"
              onChange={props.onUpdateUsername}
              value={props.username}/>
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-lg btn-success"
              type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const propTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUsername: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

// if you just use a function to render UI, add the propTypes
// to the React function manually
// (Otherwise propTypes are an option in React.createClass)
Prompt.propTypes = propTypes;


module.exports = Prompt;
