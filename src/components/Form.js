import React, { Component } from 'react';
import OptionSelect from './OptionSelect'


class Form extends Component {

    monedaRef = React.createRef();
    criptomonedaRef = React.createRef();

    handleSubmit = (e) =>{
        e.preventDefault();

        //Crear el  objeto
        const cotizacion = {
        moneda : this.monedaRef.current.value,
        criptomoneda : this.criptomonedaRef.current.value
        }

        // enviarlos por props
        this.props.obtenerValorCrypto(cotizacion)
        
    }

    render() { 
        return ( 
           <form onSubmit={this.handleSubmit}>
               <div className="form-group">
                   <label>Moneda:</label>
                   <select ref={this.monedaRef} className="form-control">
                        <option value="" disabled defaultValue>Elige tu moneda</option>
                        <option value="USD">Dolar Estadounidense</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="GBP">Libras</option>
                        <option value="EUR">Euros</option>
                   </select>
               </div>
               <div className="form-group">
                   <label>Criptomoneda:</label>
                   <select ref={this.criptomonedaRef} className="form-control">
                        {Object.keys(this.props.monedas).map(key => (
                            <OptionSelect
                                key={key} 
                                monedas={this.props.monedas[key]}
                            />
                        ))}
                   </select>
               </div>
               <div className="form-group">
                   <input type="submit" className="btn btn-primary" value="cotizar"/>
               </div>
           </form>
         );
    }
}
 
export default Form;