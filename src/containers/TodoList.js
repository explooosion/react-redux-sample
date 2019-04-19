import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

import Todo from '../components/Todo';

class TodoList extends Component {
  render() {
    // 透過 mapStateToProps, mapDispatchToProps 注入
    const { todos, toggleTodo } = this.props;
    return (
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
          />
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  // 此 state 將會注入在 props
  // 前面只是 key 名稱，該名稱用在 props 中提取
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  // 此 dispatch 將會注入在 props
  // 後面的 toggleTodo 是來自 ../actions
  toggleTodo: (id)=>dispatch(toggleTodo(id)),
});

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
}

TodoList.defaultProps = {
  todos:[],
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
