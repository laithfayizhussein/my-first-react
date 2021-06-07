import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }
  animalsClicks = () => {
    this.setState(
      {clicks: this.state.clicks+1,}
      );}

  render() {
    return (
      <div>
                <Card style={{ width: '470px'}}>
                <Card.Img variant="top" width="200px" height="250px" title={this.props.keyword} src={this.props.imgUrl} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}<br/>
              <br/> <h4>horns: {this.props.hornsCount}</h4><br/>
              <h5>Votes: {this.state.clicks}</h5><br/>
            </Card.Text>
            <Button onClick={this.animalsClicks} variant="primary">Click to Vote</Button>
          </Card.Body>
      </Card>
      </div>


    );
  }
}
{/* <h2>{this.props.title}</h2>
<card.img src={this.props.imgUrl} width='470px' height='470px' alt={this.props.title} title={this.props.title}></img>
<p>{this.props.description}</p> */}
export default HornedBeasts;