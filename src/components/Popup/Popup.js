import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';

class Popup extends Component {  
  render() {  
    return (  
      <Modal.Dialog>
        <Modal.Body>
          <p>{this.props.text}</p>
          <Button variant='secondary' onClick={this.props.closePopup}>Close</Button>
        </Modal.Body>
      </Modal.Dialog> 
    );  
  }  
}  

export default Popup;