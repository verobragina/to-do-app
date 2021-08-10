import React, {Component} from 'react';

import './add-item.css';

export default class AddItem extends Component {

  state = {
    label: ''
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (!this.state.label) {
      return
    }
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    })
  }

  render() {
    return (
      <form className='item-add-form d-flex'
            onSubmit={this.onSubmit}>
        <input type='text'
               className='form-control'
               onChange={this.onLabelChange}
               placeholder='What need to be done?'
               value={this.state.label}/>
        <button type='button'
                className='btn btn-outline-secondary btn-width'
                onClick={this.onSubmit}>
          Add Item
        </button>
      </form>
    )
  }
};
