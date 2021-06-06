import React from 'react' ;

class HornedBeasts extends React.Component {
    render() {
        return (
            <div>
               <h2>{this.props.title}</h2>
               <img src={this.props.imgUrl} width='500px' height='500px' alt={this.props.title} title={this.props.title}/>
               <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeasts ;
