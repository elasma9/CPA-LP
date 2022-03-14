
import React from 'react';

import axios from 'axios';
import './subform.css';
// import backgroundsvg from './backgroundsvg.svg';
// import {Modal} from 'react-bootstrap';
// import { setUserEmail } from 'Actions';
// import config from 'Config';
import Popup from "reactjs-popup";
import Content from "./cont.js";
import {Button, ButtonToolbar} from 'react-bootstrap';
import "../Lp.css";
    

function Prompt() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <ButtonToolbar>
        <Button className ="raise bbutton" variant="success" onClick={() => setModalShow(true)}>
        GET MY SKIN'S DNA REPORT <i id= 'download-icons' className="icofont-hand-drawn-right"></i>
        </Button>
  
        <Content
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
  }
  export default Prompt ;
