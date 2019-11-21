import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import { Button, Form, FormGroup } from 'react-bootstrap';

export class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputs: ['input-0'],
      start: false,
      names: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  appendInput() {
    var newInput = `input-${this.state.inputs.length}`;
    this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({start: true})
  }

  handleChange = (event) => {
    let name = event.target.name
    let names = this.state.names
    let obj = event.target.value

    names[name] = obj
    
    this.setState({
      names: names
    })
  }
  
  render () {
    if (this.state.start) {

      let values = []
      for(var key in this.state.names) {
        values.push(this.state.names[key])
      }

      return (
        <div>
          <p>The secret santa was started with: {values.join(', ')}</p>
        </div>
      )
    }
    else {
      return (
        <div>
            <Form onSubmit={this.start}>
              <FormGroup>
                <div id="dynamicInput">
                    {this.state.inputs.map(input => <Form.Control onChange={ this.handleChange } style={{'marginBottom' : 10}} 
                      name={input} key={input}></Form.Control>)}
                </div>
              </FormGroup>
            </Form>
            <Button onClick={ () => this.appendInput() }>
                Add a member!
            </Button><br></br>
            <Button style={{'marginTop': 10}} variant='success' onClick={ this.handleSubmit }>
                Start secret santa!
            </Button>
        </div>
      )
    }
  }
}
