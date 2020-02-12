import React, { Component } from 'react';
import App from './App';
import './Boton.css';


class Boton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        function capturar(){

   
    let box =document.getElementById("cajaTexto").value;

 
    document.getElementById("resultado").innerHTML=" \
    <br/>"+box;
}
        return ( 
            
        <React.Fragment>

           

            <form id="form1">
            Lista:<br/>     
            <input type="text" className="cajaTex" placeholder="ingresa texto" id="cajaTexto" name=""  />
          

           
            <input type="Reset" className="btnAtras" />
         

            <input type="button" className="btnSiguiente" href="javascript:history.go(1)" value="Siguiente" onclick="history.back()" onClick={()=>{
               alert("esta en uso")
                     }} />    
                
            <input type="button" value="guardar" className="btnGuardar" onclick="capturar()"/>

            </form>

        </React.Fragment>

        );
    }
}
 
export default Boton;