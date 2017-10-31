import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {setFilter} from '../actions/people'
// ...

class Filter extends Component {
  static propTypes = {
    setFilter: PropTypes.func,
  };

  handleChange = (e) => {
    return this.props.setFilter(e.target.value)
  }

  render() {
    return (
      <div className='App-box'>
        <input type='text' onChange={this.handleChange} ></input>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setFilter
}, dispatch);

export default connect(null, mapDispatchToProps)(Filter);
