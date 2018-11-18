/* 引入图片组件
 * @Author: cellerchan 
 * @Date: 2018-11-19 00:25:16 
 * @Last Modified by: cellerchan
 * @Last Modified time: 2018-11-19 00:30:54
 */

import React, { Component } from 'react'

export default class Img extends Component {

  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <img src={require(this.props.src)} />
    )
  }
}
