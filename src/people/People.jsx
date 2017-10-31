import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ...

class People extends Component {
  static propTypes = {
    filter: PropTypes.string,
    people: PropTypes.array,

  };




  render() {
    this.filter= this.props.filter.toLowerCase();
    this.filteredPeople = this.props.people.filter((person) => {
        return person.name.toLowerCase().indexOf(this.filter)!==-1;
    });

    return (
      <div>
          {this.filteredPeople.map((person) => {
              return <div key={person.id} className='App-box'>{person.name}</div>
            })
          }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  people:state.browse.people,
  filter:state.browse.filterQuery
});


export default connect(mapStateToProps)(People);
