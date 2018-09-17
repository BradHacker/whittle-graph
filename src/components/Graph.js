import React from 'react'
import Plot from 'react-plotly.js'
import Polynomial from 'polynomial'

export default class Graph extends React.Component {
    constructor() {
        super()
        this.state = {
            datas: [],
            inc: 0.1
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps === this.props) {
            return
        } else {
            let curves = nextProps.curves
            let datas = []
            let type = 'scatter'
            let mode = 'lines'
            for(let i = 0; i < curves.length; i++) {
                let curve = curves[i]
                let data = {
                    x: [],
                    y: [],
                    type: type,
                    mode: mode,
                    line: {
                        color: curve.color
                    }
                }
                console.log(nextProps.inc)
                let inc = nextProps.inc === 0 ? 0.1 : nextProps.inc
                
                for(let x = parseFloat(curve.min); x < parseFloat(curve.max); x += inc) {
                    data.x.push(x)
                    data.y.push(Polynomial(curve.polynomial).eval(x))
                    if(x + inc > parseFloat(curve.max) && x !== parseFloat(curve.max)) {
                        inc = parseFloat(curve.max) - x
                    }
                }
                datas.push(data)
                //console.log(data)
            }
            this.setState({ datas: datas, inc: nextProps.inc })
        }
    }
    render() {
        return (
            <Plot
                data={this.state.datas}
                layout={ 
                    {
                        width: 750,
                        height: 500,
                        title: '',
                        hovermode: false,
                        xaxis: {
                            nticks: 10
                        },
                        yaxis: {
                            scaleanchor: "x"
                        }
                    }
                }
                config={
                    {
                        displaylogo: false,
                        modeBarButtonsToRemove: ['hoverClosestCartesian','hoverCompareCartesian'],
                        scrollZoom: true
                    }
                }
            />
        )
    }
}