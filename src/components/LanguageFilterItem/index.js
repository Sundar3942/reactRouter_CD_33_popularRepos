// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachItem, filterClickHandler, activeItem} = props
  const {id, language} = eachItem

  const onClickFilterItem = () => {
    filterClickHandler(id)
  }

  const btnClassName = activeItem === id ? 'highlighted-filter-item' : null

  return (
    <button
      type="button"
      className={`filter-btn ${btnClassName}`}
      onClick={onClickFilterItem}
    >
      {language}
    </button>
  )
}

export default LanguageFilterItem
