import './index.css'
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

class PrimeVideo extends Component {
  getActionData = () => {
    const {moviesList} = this.props
    const filteredItems = moviesList.filter(
      each => each.categoryId === 'ACTION',
    )
    console.log(filteredItems)
    return filteredItems
  }

  getComedyData = () => {
    const {moviesList} = this.props
    const filteredItems = moviesList.filter(
      each => each.categoryId === 'COMEDY',
    )
    console.log(filteredItems)
    return filteredItems
  }

  render() {
    const getActionData = this.getActionData()
    const getComedyData = this.getComedyData()
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-img"
        />
        <div className="movies-container">
          <h1 className="heading">Action Movies</h1>
          <MoviesSlider actionMoviesData={getActionData} />
          <h1 className="heading">Comedy Movies</h1>
          <MoviesSlider actionMoviesData={getComedyData} />
        </div>
      </div>
    )
  }
}
export default PrimeVideo
