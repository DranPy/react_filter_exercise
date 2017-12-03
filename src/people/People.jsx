import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFilteredPeople }  from '../reducers/people';

class People extends Component {
  static propTypes = {
    people: PropTypes.array,
  };

  render() {
    return (
      <div>
          {this.props.people.map((person) => {
              return <div key={person.id} className='App-box'>{person.name}</div>
            })
          }
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  people: getFilteredPeople(state.browse.people, state.browse.filterQuery)
});

export default connect(mapStateToProps)(People);