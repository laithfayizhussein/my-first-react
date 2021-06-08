  
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
class SelectedBeast extends React.Component{
    render(){
        return(
<div>
<Modal 

show={this.props.show} 
onHide={this.props.handleClose}>
                   
        <Modal.Header closeButton>
                <Modal.Title>
                            Modal heading
                </Modal.Title>
        </Modal.Header>
                   
        <Modal.Body> 
                        {this.props.selectedAnimal.description} 
        </Modal.Body>

                    <Card.Img
                     style={{ width: '300px' }} 
                     variant="top" 
                     src={this.props.selectedAnimal.image_url}
                      />
  <Modal.Footer>
        <Button 
                        variant="secondary" 
                        onClick={this.props.handleClose}>
                            Close
          </Button>
             <Button 
                        variant="primary" 
                        onClick={this.props.handleClose}>
                            Save Changes
             </Button>
    </Modal.Footer>
                
                </Modal>
            
</div>        )
    }
}
export default SelectedBeast;