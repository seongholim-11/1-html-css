import React, { Component } from 'react'

export default class Iteration extends Component {
  render() {
    const name = ['눈사람', '얼음', '눈', '바람'];
    const nameList = name.map((item, index)=><li key={index}>{item}</li>)
    return (
      <div>
        <ul>
            {nameList}
        </ul>
      </div>
    )
  }
}
