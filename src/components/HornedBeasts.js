import React from 'react';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voteCount: 0
        }
    }

    vote = () => {
        let value = this.state.voteCount;
        this.setState({ voteCount: value += 1 })
        ;
        this.update();
    }

    update= () => {
        this.props.selectedUpdate(this.props.title);
    }

    render() {
        return (
            
            <Card  border="secondary"  style={{ width: '19rem' , background : 'black' , color : 'white' }}>
                            <Card.Img variant="top" src={this.props.img} height='250em' alt={this.props.keyword} onClick={this.vote} />
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Text><p>{this.props.description}</p>
                                    <p>❤{this.state.voteCount}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
            
        )
    }
}


export default HornedBeast;