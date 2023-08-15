import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {selectedId: countryAndCapitalsList[0].id}

  optionChanged = event => {
    this.setState({selectedId: event.target.value})
  }

  getCapital = () => {
    const {selectedId} = this.state
    const value = countryAndCapitalsList.find(each => each.id === selectedId)
    return value.country
  }

  render() {
    const {selectedId} = this.state
    const country = this.getCapital(selectedId)

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            className="select-field"
            onChange={this.optionChanged}
            name="question"
            value={selectedId}
          >
            {countryAndCapitalsList.map(each => (
              <option className="option" key={each.id} value={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <label className="question" htmlFor="question">
            is capital of which country?
          </label>
          <p className="result">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
