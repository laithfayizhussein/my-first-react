import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import animalsData from './components/animalsData.json'
import SelectedBeast from './component/SelectedBeast';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedAnimal: {},
      Data: Data,
    }
  }
  handleShow = () => {
    this.setState({
      show: true,
    })
  }
  handleClose = () => {
    this.setState({
      show: false,
    })
  }
  displayAniml = (title) => {
    const selectedAnimal = Data.find(animle => {
      if (animle.title === title) {
        return animle;
      }
    })
    this.setState({
      show: true,
      selectedAnimal: selectedAnimal,
    })
  } 
  render() {
    return (
      <div>  
        <Header/>
        <Main  Data={this.state.Data}
          handleShow={this.handleShow}
          displayAniml={this.displayAniml}
        />
        <Footer/>
      </div>
    );
  }

}

export default App;