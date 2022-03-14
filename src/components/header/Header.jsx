import React, { Component } from 'react';
import { Provider, Heading, Subhead} from 'rebass';
import {Section} from 'react-landing-page';
//import { Label, Input } from '@rebass/forms';
import'./Header.css';
import { Row, Col } from 'react-flexbox-grid';
import axios from 'axios';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:[],
      subtitle:[], 
      // color:["blue"]
    };
  }


  componentDidMount() {
    axios.get(`http://localhost:8000/api/header/`)
      .then(res => {
        const title = res.data[0].title;
        const  subtitle = res.data[0].subtitle;
        this.setState({title});
        this.setState({subtitle});
        // this.setState({color});

      })
  }
  render() { 



    return ( 

<div className = "Container">
  
<Row className = "rowDiv">
  <Col className = "colDiv">   
  <div className = "divStyle">{this.state.title}</div>
  <div className = "subStyle"> {this.state.subtitle}</div>

 </Col>
 
</Row>


</div>


     );
  }
}
 
export default Header;