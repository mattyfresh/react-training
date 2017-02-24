const React = require('react');
const Link = require('react-router').Link;

module.exports = (props) => {
  return (
    <div className="jumbotron col-sm-12 text-center">
      <p className="lead">Some Fancy Text</p>
      <Link to="/playerOne">
        <button className="btn btn-success btn-lg">Get Started Battling</button>
      </Link>
    </div>
  );
};
