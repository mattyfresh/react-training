const React = require('react');
const Link = require('react-router').Link;

const Restart = (props) => {
  return (
    <div className="col-sm-12">
      <Link to="/playerOne">
        <br />
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  );
};

module.exports = Restart;
