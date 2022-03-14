import React, {Component} from "react";
import './subform.css';
import jsonp from 'jsonp';
import { Redirect, Link, Route} from 'react-router-dom';
// import Prompt from './subform.js';
import { Grid, Row, Col } from "react-flexbox-grid";
import {Modal, Button, Form} from 'react-bootstrap';
import { stat } from "fs";
// import EmailForm from './mlc/fomcomp';
const getAjaxUrl = url => url.replace('/post?', '/post-json?');
const subscribeUrl ="https://cryptagia.us15.list-manage.com/subscribe/post?u=778a8f7e71ed6e9249b5bcff7&amp;id=63374c2eb9";




class Content extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      status: null,
      msg: null,
    };
  }



  onSubmit = e => {
    e.preventDefault();
    if (!this.input.value || this.input.value.length < 5 || this.input.value.indexOf('@') === -1) {
      this.setState({
        status: 'error',
      });
      return;
    }

    const url = getAjaxUrl(subscribeUrl) + `&EMAIL=${encodeURIComponent(this.input.value)}`;
    this.setState(
      {
        status: 'sending',
        redirect: "false",
        msg: null,
      },
      () =>
        jsonp(
          url,
          {
            param: 'c',
          },
          (err, data) => {
            if (err) {
              this.setState({
                status: 'error',
                msg: err,
              });
            } else if (data.result !== 'success') {
              this.setState({
                status: 'error',
                msg: data.msg,
              });
            } else {
              this.setState({
                status: 'success',
                redirect:true,
                msg: data.msg,
              });
            }
          }
        )
    );
  };


    render(){
      const { action } = this.props;
    const { status } = this.state;
    if (status === "success") {
      return <Redirect to='/redirect' />     
    }
    
       return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vbottom"
        centered
        backdrop={ 'static' }
      >
      <Modal.Header style={{borderColor : 'white'}} closeButton></Modal.Header>
        <Modal.Header className = "modalheaderdiv">
          <Modal.Title className = "col-sm-12" style = {{textAlign:"center"}} >
          <h1 className = 'popuptitle' >Your DNA Reveals The Exact Formula Needed For Your Skin</h1>
          <h5 className = 'popupsubtitle' >Right Skincare, Right Product For The Skin You're In</h5>
          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className = "formBasicEmail">
        <Form action={action} >
        <Form.Group  controlId="formBasicEmail">
    <Form.Control 
    size="lg" 
    className = " col emaildiv" 
    type="email" 
    placeholder="Enter email" 
    name="email"
    ref={node => (this.input = node)}

    required />
    
  </Form.Group>
  <Button className = "col-md-offset-2 col-md-8 col-md-offset-2 buttonDiv" 
   variant="success" 
  disabled={this.state.status === 'sending' || this.state.status === 'success'}
  type="submit"
  onClick={this.onSubmit}

  >
  GET MY SKIN'S DNA REPORT
    {this.state.status === 'sending' ? <i className="icofont-spinner-alt-4" style={{ marginLeft: '10px' }} /> : null}
  </Button>
  <div className="col-xs-12">
                    {status === 'success'  && (<p className="success">success</p>)   }

                    {status === 'error' && <p className="error">error</p>}
                  </div>

</Form>
        </Modal.Body>
       
      </Modal>
    );
  }}
export default Content;