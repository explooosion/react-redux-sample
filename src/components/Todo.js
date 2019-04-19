import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  render() {
    const { onClick, completed, text } = this.props;
    return (
      <li
        onClick={onClick}
        style={{
          padding: '.2rem',
          fontSize: '20px',
          textDecoration: completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {text}
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo;
