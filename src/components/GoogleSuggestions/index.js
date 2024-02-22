// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  inputSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google-logo"
        />

        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            className="search-icon"
            alt="search-icon"
          />
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
        </div>
        <ul>
          {suggestionsList.map(eachSearch => (
            <SuggestionItem
              searchResult={eachSearch}
              key={eachSearch.id}
              addInputSuggestion={this.inputSuggestion}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
