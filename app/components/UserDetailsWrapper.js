const React = require('react');

module.exports = (props) => {
  return (
    <div className='col-sm-6'>
      <p className='lead'>{props.header}</p>
      {props.children}
    </div>
  );
};
