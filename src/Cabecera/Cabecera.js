import React from 'react';
class Fruta extends React.Component {
    constructor(){
        super();
        this.state={
            cantidad:0,
            precio:100,
            total:0
        }
    }
    

    render() { 
        return(
            <div>Hola {this.props.name}
                <div>Precio: {this.state.precio}</div>
                <div>Cantidad: {this.state.cantidad}</div>
                <div>Total:{this.state.total}</div>

                <button onClick={()=>{
                    this.setState({cantidad:this.state.cantidad+1});
                    }
                }>Agregar</button>

                <button onClick={()=>{
                    this.setState({total:this.state.cantidad*this.state.precio});
                    }
                }>calcular</button>
            </div>
            
        )
    }
}
 
export default Fruta;

