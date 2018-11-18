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
import styles from './greeter.css'
import img from './images/test.jpg'
import {Img} from './components/index'

export default class Greeter extends Component {

  componentDidMount(){
    console.log(img)
  }
  
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
        <img src={require(`./images/test.jpg`)} />
        <img src="./images/test.jpg" />
        <img src={img} />
      </div>
    )
  }
}
