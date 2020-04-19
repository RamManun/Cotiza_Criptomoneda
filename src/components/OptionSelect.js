import React, { Component } from 'react';

class OpcionSelect extends Component {
    render() { 
        const {id, name} = this.props.monedas
        return ( 
            <option value={id}>
                {name}
            </option>
         );
    }
}
 
export default OpcionSelect;