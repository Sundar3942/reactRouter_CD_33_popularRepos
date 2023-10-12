import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    isLoading: true,
    activeItem: languageFiltersData[0].id,
    repos: null,
  }

  componentDidMount() {
    this.getRepositoryItems()
  }

  getRepositoryItems = async () => {
    const {activeItem} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeItem}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    console.log(data.popular_repos)
    const popularRepos = data.popular_repos
    console.log(popularRepos)
    if (response.ok === true) {
      const updatedData = popularRepos.map(each => ({
        id: each.id,
        name: each.name,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      this.setState({isLoading: false, repos: updatedData})
    }
  }

  filterClickHandler = id => {
    this.setState({isLoading: true, activeItem: id}, this.getRepositoryItems)
  }

  renderLoader = () => (
    <div data-testid="loader" className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading, activeItem, repos} = this.state
    return (
      <div className="page">
        <h1 className="page-heading">Popular</h1>
        <ul className="language-filter-item-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              eachItem={each}
              key={each.id}
              activeItem={activeItem}
              filterClickHandler={this.filterClickHandler}
            />
          ))}
        </ul>
        {isLoading && this.renderLoader()}
        {!isLoading && (
          <ul className="repos-container">
            {repos.map(each => (
              <RepositoryItem eachRepo={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
