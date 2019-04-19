import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
    };
  }

  onAdd() {
    this.props.addTodo(this.state.item);
    this.setState({ item: '' });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.item} onChange={(e) => this.setState({ item: e.target.value })} />
        <button onClick={() => this.onAdd()}>ADD</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (item) => dispatch(addTodo(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
