import './index.css'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {eachMovie} = props
  const {thumbnailUrl, videoUrl} = eachMovie
  return (
    <div>
      <Popup
        modal
        trigger={
          <div>
            <button type="button" className="thumbnail-btn">
              <img
                src={thumbnailUrl}
                alt="thumbnail"
                className="thumbnail-img"
              />
            </button>
          </div>
        }
        className="popup-content"
      >
        {close => (
          <div className="model-container">
            <div>
              <ReactPlayer url={videoUrl} />
            </div>
            <button
              data-testid="closeButton"
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
