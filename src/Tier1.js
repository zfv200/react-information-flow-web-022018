import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import { updateColors, updateChildColors } from './updateColor.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  render() {
    return (
      <div onClick={updateColors.bind(this)} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleChildClick={updateChildColors.bind(this)} color={this.state.childColor} />
        <Tier2 handleChildClick={updateChildColors.bind(this)} color={this.state.childColor} />
      </div>
    )
  }
}
