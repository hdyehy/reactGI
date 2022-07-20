import React, { Component } from 'react'
import BasicInfo from './components/basicinfo-component';
import './App.css'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [
        {
          id: 1,
          name: 'Matthew Trigo',
          birthDate: '12/12/1997',
          color: 'Red',
          number: '8'
        },
        {
          id: 2,
          name: 'John Doe',
          birthDate: '11/11/1992',
          color: 'Blue',
          number: '63'
        },
        {
          id: 3,
          name: 'Juan Gomez',
          birthDate: '04/04/1980',
          color: 'Green',
          number: '52'
        }]
    }
  }

  render() {
    const { people } = this.state

    return (
      <div className="app">
        <div className='card'>

          {people.map((person) => {
            return (
              <BasicInfo content={person} key={person.id} />
            )
          })}

        </div>
      </div>
    )
  }
}