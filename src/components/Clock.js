import React, { Component } from 'react'  ;
import Clock from 'react-live-clock';  
import './Clock.css';  
import 'bootstrap/dist/css/bootstrap.min.css'; 


class clockDemo extends Component {
    
    
    render() { 
        return (  
            <div className="container">  
                      
                             
                    <div className="clk">  
                            <Clock format={'hh:mmA'} ticking={true} />  
                    </div>  
           
    </div>     );
    }
}
 
export default clockDemo;