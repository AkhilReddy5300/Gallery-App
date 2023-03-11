import './index.css'

const ThumbnailItem = props => {
  const {imagesList, onChngeItem} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesList

  const onChangeImage = () => {
    onChngeItem(id)
  }
  return (
    <li className="lists">
      <button type="button" onClick={onChangeImage} className="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} className="list-img" />
      </button>
    </li>
  )
}
export default ThumbnailItem
