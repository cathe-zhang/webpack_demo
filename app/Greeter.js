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

export default class componentName extends Component {
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
      </div>
    )
  }
}
