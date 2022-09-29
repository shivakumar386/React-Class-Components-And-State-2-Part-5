// import {Component} from 'react'
// import SuggestionItem from '../SuggestionItem/index'
// import './index.css'

// class GoogleSuggestions extends Component {
//   state = {searchInput: ''}

//   onChangeInput = event => {
//     this.setState({searchInput: event.target.value})
//   }

//   displayAllInput = id => {
//     const {suggestionsList} = this.props
//     const searchInputDetails = suggestionsList.filter(
//       eachItem => eachItem.id === id,
//     )
//     this.setState({searchInput: searchInputDetails.suggestion})
//   }

//   render() {
//     const {suggestionsList} = this.props
//     const {searchInput} = this.state
//     const filteredInputs = suggestionsList.filter(eachItem =>
//       eachItem.suggestion.includes(searchInput),
//     )
//     return (
//       <div className="bg-container">
//         <div className="card-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
//             alt="google logo"
//             className="logo"
//           />
//           <div>
//             <input
//               type="search"
//               className="search-element"
//               onChange={this.onChangeInput}
//               placeholder="Search Google"
//               value={searchInput}
//             />
//             <div>
//               <ul>
//                 {filteredInputs.map(eachItem => (
//                   <SuggestionItem
//                     suggestionsList={eachItem}
//                     key={eachItem.id}
//                     displayAllInput={this.displayAllInput}
//                   />
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default GoogleSuggestions

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-input-suggestions-container">
            <div className="search-input-container">
              <img
                alt="search icon"
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="suggestions-list">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  suggestionDetails={eachSuggestion}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
