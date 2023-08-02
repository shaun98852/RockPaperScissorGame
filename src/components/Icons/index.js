import {Button, ImageElement} from './styledComponents'

const Icons = props => {
  const {icon, requiredFunction} = props
  const {imageUrl, id} = icon

  const showGameView = () => {
    requiredFunction(id)
  }

  const getAlt = () => {
    switch (id) {
      case 'ROCK':
        return 'rockButton'
      case 'SCISSORS':
        return 'scissorsButton'
      case 'PAPER':
        return 'paperButton'
      default:
        return null
    }
  }

  return (
    <Button onClick={showGameView} data-testid={getAlt()}>
      <ImageElement src={imageUrl} alt={id} />
    </Button>
  )
}

export default Icons
