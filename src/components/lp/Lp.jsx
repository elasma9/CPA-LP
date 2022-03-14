import React, { Component } from 'react';
import { config } from 'react-spring/renderprops';
import {Spring} from 'react-spring/renderprops';
import './Lp.css';
// import Icon from '@material-ui/core/Icon';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import Prompt from  './subform/subform.js'
class Lp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading:[],
      data:[],
 
    };
  }



  componentDidMount() {
    axios.get(`http://localhost:8000/api/lp/`)
      .then(res => {
        const heading = res.data[0].title;
        const data = res.data
        this.setState({heading});
        this.setState({data});

        console.log(this.state.bullets);
      })
  }
    render() { 
      const styled = {
    
        lineHeight: '150%',

      };
        return (  
        <div className="App">
          
     



        <ul>
        <li className= 'headlinediv'><h1>{this.state.heading}</h1></li>
  {/* <li> <i id='iconi' className="icofont-tick-mark"/> Top tools. Get the top tools and apps to help you look younger!</li>
  <li><i id='iconi' className="icofont-tick-mark"/> Top sites and blogs we recommend so you can kick-start your youthfulness!</li>
  <li><i id='iconi' className="icofont-tick-mark"/> Top tips and how-to's so you'll see results quicker!</li> */}
  { this.state.data.map(bullet => <li className = "bulletsDiv"><i id='iconi' className="icofont-tick-mark icofont-2x"/><div style={styled} dangerouslySetInnerHTML={{__html: bullet.content}} /></li>)}
  <div className = 'buttondiv'>
   <Prompt/>
      </div>

  </ul>
     

    </div> 
    );
    }
}
 
export default Lp;