// import './index.css'

// const SuggestionItem = props => {
//   const {suggestionsList, displayAllInput} = props
//   const {suggestion} = suggestionsList
//   const displayInput = () => {
//     displayAllInput(suggestion)
//   }
//   return (
//     <li className="list-elements">
//       <p>{suggestion}</p>
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
//         alt="arrow"
//         className="arrow-logo"
//         onClick={displayInput}
//       />
//     </li>
//   )
// }

// export default SuggestionItem

import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
