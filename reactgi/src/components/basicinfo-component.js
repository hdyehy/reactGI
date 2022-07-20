import React, { Component } from 'react'

export default class BasicInfo extends Component {

  render() {

    const { image, name, birthDate, color, number } = this.props.content

    return (
      <>
        <div className='wrap'>
          
          <h2>{name}</h2>
          <ul>
            <li>My BirthDate is: {birthDate} </li>
            <li>My Favorite Color is: {color} </li>
            <li>My Number Color is: {number} </li>
          </ul>

        </div >

      </>)
  }
}