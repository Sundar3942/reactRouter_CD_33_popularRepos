// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachRepo} = props
  const {name, forksCount, starsCount, issuesCount, avatarUrl} = eachRepo

  return (
    <li className="repo-item">
      <img src={avatarUrl} alt={name} className="repo-item-avatar" />
      <h2>{name}</h2>
      <div className="stats">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="stats-img"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="stats">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="stats-img"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="stats">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="stats-img"
        />
        <p>{issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
