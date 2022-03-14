import React, { Component } from 'react';
import './Imageview.css';
import axios from 'axios';

class Imageview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image:[],
 
    };
  }


  componentDidMount() {
    axios.get(`http://localhost:8000/api/image/`)
      .then(res => {
        const image = res.data[0].image;
        this.setState({image});
        // this.setState({color});

      })
  }
  render() { 
    return ( 

 <section className="wow fadeInLeft">

      <div className='imagediv'>
      <img  srcSet={this.state.image}/>
      </div>
    
      </section>
     );
  }
}
 
export default Imageview;