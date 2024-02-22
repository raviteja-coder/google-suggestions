// Write your code here
// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {SuggestionsList, updateInputSuggestion} = props
  const {suggestion} = SuggestionsList

  const onAddInput = () => {
    updateInputSuggestion(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <button type="button" onClick={onAddInput}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
