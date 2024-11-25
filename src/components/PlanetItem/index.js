import './index.css'

const PlanetItem = props => {
  const {itemDetails} = props
  const {id, name, imageUrl, description} = itemDetails
  return (
    <div className="item-con">
      <img src={imageUrl} className="image-settings" alt={`planet ${name}`} />
      <h2 className="title">{name}</h2>
      <p className="desc">{description}</p>
    </div>
  )
}
export default PlanetItem
