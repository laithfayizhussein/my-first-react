import React from 'react';
import HornedBeast from './HornedBeasts';
import Data from './Data.json';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


class Main extends React.Component {



    Handiling = (e) => {
        let allHorns = Data;
        let newRender;
        let picked = parseInt(e.target.value);
        if (picked) {
            newRender = allHorns.filter((value) => {
                if (value.horns === picked) {
                    return value;
                }
                return newRender;
            })
        } else {
            newRender = allHorns;
        }
        this.props.updateForm(newRender);
        
    };




    render() {
        return (
            <div>
                <Container>
                    <Form.Control as="select" defaultValue="all" onChange={this.Handiling}>
                        <option value="all">all</option>
                        <option value="1">one</option>
                        <option value="2">two</option>
                        <option value="3">three</option>
                        <option value="100">one hunder</option>
                    </Form.Control>
                </Container>
                <div style={{display:'flex','flex-wrap': 'wrap' ,'justify-content': 'center', gap: '0.7rem'}}> 
                    {this.props.Data.map((value) => {
                        return (
                            <HornedBeast
                                title={value.title}
                                img={value.image_url}
                                keyword={value.keyword}
                                description={value.description}
                                horns={value.horns}
                                selectedUpdate={this.props.selectedUpdate}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default Main;