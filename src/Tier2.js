import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      childColor: getReducedColor(this.props.color),
      tier3Clicked: false
    }
  }

  componentWillReceiveProps(nextProps){
    console.log("next props:", nextProps)
    this.setState({
      childColor: getReducedColor(nextProps.color)
    })
  }

  handleClick = (event) => {
    let newColor = getRandomColor()
    this.setState({
      childColor: newColor
    })
  }


  //
  // handleTier3Click = (event) => {
  //   this.setState({
  //     tier3Clicked: !this.state.tier3Clicked
  //   })
  // }


  render() {
    console.log("current color:", this.props.color, "state:", this.state.color)
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 handleClick={this.handleClick} color={this.state.childColor} />
        <Tier3 handleClick={this.handleClick} color={this.state.childColor} />
      </div>
    )
  }
}
