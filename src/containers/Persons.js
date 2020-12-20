import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';
import * as actionTypes from '../store/personsActionTypes';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={() => this.props.onAddPerson({
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        })} />
                {this.props.persons.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {persons: state.persons};
}
const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (person) => dispatch({type: actionTypes.ADD, person: person}),
        onDeletePerson: (personId) => dispatch({type: actionTypes.DELETE, personId: personId})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);