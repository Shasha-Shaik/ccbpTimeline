import {Component} from 'react'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

class MoviesSlider extends Component {
  render() {
    const {actionMoviesData} = this.props
    console.log(actionMoviesData)
    const settings = {
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    return (
      <>
        <Slider {...settings}>
          {actionMoviesData.map(each => (
            <MovieItem key={each.id} eachMovie={each} />
          ))}
        </Slider>
      </>
    )
  }
}
export default MoviesSlider
