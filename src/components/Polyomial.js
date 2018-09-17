import React from 'react'

export default class Polynomial extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: props.index,
            polynomial: 'x',
            min: 0,
            max: 1,
            inc: props.inc,
            r: Math.floor(Math.random()*255),
            g: Math.floor(Math.random()*255),
            b: Math.floor(Math.random()*255)
        }
        this.sendPolynomial()
        this.updatePolynomial = this.updatePolynomial.bind(this)
        this.sendPolynomial = this.sendPolynomial.bind(this)
        this.updateMin = this.updateMin.bind(this)
        this.updateMax = this.updateMax.bind(this)
    }
    updatePolynomial(e) {
        this.setState({ polynomial: e.target.value })
    }
    updateMin(e) {
        this.setState({ min: e.target.value })
    }
    updateMax(e) {
        this.setState({ max: e.target.value })
    }
    sendPolynomial() {
        this.props.update(this.state.index, {
            polynomial: this.state.polynomial,
            min: this.state.min,
            max: this.state.max,
            inc: this.props.inc,
            color: 'rgb(' + this.state.r + ',' + this.state.g + ',' + this.state.b + ')'
        })
    }
    render() {
        return (
            <div className="polynomial">
                <input className="polynomialText" type="text" placeholder="polynomial" onChange={this.updatePolynomial} value={this.state.polynomial}></input>
                <br/>
                <input className="min" type="number" placeholder="min" onChange={this.updateMin} value={this.state.min}></input>
                <input className="max" type="number" placeholder="max" onChange={this.updateMax} value={this.state.max}></input>
                <br/>
                <button style={{ backgroundColor: 'rgb(' + this.state.r + ',' + this.state.g + ',' + this.state.b + ')' }} onClick={this.sendPolynomial} className="sendPolynomial">Update</button>
            </div>
        )
    }
}