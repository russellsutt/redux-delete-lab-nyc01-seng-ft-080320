import React, { Component } from 'react'
import Band from './Band'




class Bands extends Component {


    renderBands = () => {
        if (this.props.bands) {
            return this.props.bands.map((band, id) => <Band key={id} {...band} deleteBand={this.props.deleteBand}/>)
        }
    }

    render() {
        return (
            <div>
                {this.renderBands()}
            </div>
        )
    }
}


export default Bands;