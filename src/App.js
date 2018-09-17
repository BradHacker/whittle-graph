import React, { Component } from 'react';
import './App.css';
import Graph from './components/Graph'
import Polynomial from './components/Polyomial'

class App extends Component {
  constructor() {
    super()
    this.state = {
      polynomials: [],
      inc: 0.1
    }
    this.addPolynomial = this.addPolynomial.bind(this)
    this.updatePolynomial = this.updatePolynomial.bind(this)
    this.handleInc = this.handleInc.bind(this)
  }
  addPolynomial() {
    this.setState({ polyomials: this.state.polynomials.push({
      polynomial: 'x',
      min: 0,
      max: 1,
      inc: this.state.inc
    }) })
  }
  updatePolynomial(index, polynomial) {
    let polynomials_temp = this.state.polynomials
    polynomials_temp[index] = polynomial
    this.setState({ polynomials: polynomials_temp })
    console.log(this.state.polynomials)
  }
  handleInc(e) {
    this.setState({ inc: e.target.value })
  }
  render() {
    return (
      <div className="App">
        <Graph curves={this.state.polynomials} inc={parseFloat(this.state.inc)}/>
        <div className="controls">
          <input type="number" placeholder="increment" onChange={this.handleInc} value={this.state.inc}/>
          <button onClick={this.addPolynomial} className="addPolynomial">Add Polynomial</button>
        </div>
        <br/>
        { this.state.polynomials.map( (polynomial, i) => {
          return <Polynomial key={'polynomial' + i} index={i} update={this.updatePolynomial} inc={this.state.inc}/>
        })}
        <h6>Created by Bradley Harker 2018</h6>
      </div>
    );
  }
}

export default App;
