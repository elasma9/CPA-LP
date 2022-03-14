import React, { Component } from 'react';

import'./Footer.css';
import {  Row, Col } from 'react-flexbox-grid';


class Footer extends Component {

  render() { 



    return ( 

<div className = "footercontainer">
  
<Row className = "rowDivfooter">
  <Col className = "colDivfooter">   
  <div className = "divStylefooter"> <img className = 'imgfooter' srcSet={require('./allel-logo.png')}/></div>
 </Col>
 
</Row>


</div>


     );
  }
}
 





export default Footer;