import PropTypes from 'prop-types';
import React, { useState } from 'react';

const HelloWorld = (props) => {
  const [names, setNames] = useState(props.names);

  return (
    <div>
      <h3>Hello, {names[0]}!</h3>
        {names.map(name => {
          <span>{name}</span> 
        })}
    </div>
  );
};

HelloWorld.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired, // this is passed from the Rails view
};

export default HelloWorld;
