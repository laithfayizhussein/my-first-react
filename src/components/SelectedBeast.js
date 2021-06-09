import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class SelectedBeast extends React.Component {

    handleClose = () => this.props.handleClose();
    render() {
        return (

            <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>{this.props.Data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img variant="top" src={this.props.Data.image_url} height='250em' />
                    <p>{this.props.Data.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

}



export default SelectedBeast;