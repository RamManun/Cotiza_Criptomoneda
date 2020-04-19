import React, { Component } from 'react';
import Header from './Header'
//import Form from './Form'
//import Resultado from './Resultado'
import axios from 'axios';
import rp from 'request-promise'


class App extends Component {

  state = {
    monedas: [],
    cotizacion: {},
    monedaCotizada: ''
  }

  async componentDidMount(){
    this.obtenerMonedas();
  }

  obtenerMonedas = async (e) => {
    //e.preventDefault();

    // siempre poner la api
    const url = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      qs: {
        'start': '1',
        'limit': '5000',
        'convert': 'USD'
      },
      headers: {
        'X-CMC_PRO_API_KEY': '215c2fda-ffaa-4659-b398-4e4832d992d7'
      },
      json: true,
      gzip: true
    };
    
    rp(url)
      .then(response => {
        console.log('API call response:', response);
    }).catch((err) => {
        console.log('API call error:', err.message);
    });
    
  }

  //cotizar una cripto en base a una moneda
  //obtenerValorCrypto = async (monedas) => {
    //const {moneda, criptomoneda} = monedas;
    //const url =`hhttps://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=215c2fda-ffaa-4659-b398-4e4832d992d7&start=${criptomoneda}&limit=5000&convert=${moneda}`

    //await axios.get(url)
      //.then(respuesta => {
        //this.setState({
          //cotizacion: respuesta.data.data,
          //monedaCotizada: moneda
        //})
      //})
  //}

  render() {
    return (
      <div className="container">
        <Header
          titulo="Cotiza criptomonedas al Instante"
        />
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal" >
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
