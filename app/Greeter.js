// 根据CommonJS规范导出这个函数为一个模块
// var config = require('./../config.json')

// module.exports = function(){
//   var greet = document.createElement('div')
//   // greet.textContent = 'Hi there and greetings!';
//   greet.innerText = config.greetText
//   return greet;
// }

import React, { Component } from 'react'
import config from './../config.json'
import { BrowserRouter, Route } from 'react-router-dom'
import styles from './greeter.css'
import img from './images/test.jpg'
import {Img} from './components/index'
import main from './../node_modules/cellerchan-modal/bundle'
import REUI from 'rea-ui-web'
console.log(REUI)

export default class Greeter extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    console.log(img)
    console.log(123)
  }

  testMain () {
    main()
  }

  render() {
    return (
      <div className={styles.root}>

        <REUI.ListItem.ListItem itemName="sdf"/>

        {config.greetText}
        <img src={require(`./images/test.jpg`)}
          onClick={this.testMain}
        />
        <img src="./images/test.jpg" />
        <img src={img} />
      </div>
    )
  }
}
