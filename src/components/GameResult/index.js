import {
  Background,
  UserAnswerSection,
  UserAnswer,
  Heading,
  SystemUser,
  ResultHeading,
  PlayButton,
  ImageElement,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
const GameResult = props => {
  const {values, resetFunction} = props
  const {choosenIcon, ComputerValue, wonLostDraw} = values

  let choosenUrl = ''
  let computerUrl = ''

  choicesList.forEach(eachItem => {
    if (eachItem.id === choosenIcon) {
      choosenUrl = eachItem.imageUrl
    }
  })

  choicesList.forEach(eachItem => {
    if (eachItem.id === ComputerValue) {
      computerUrl = eachItem.imageUrl
    }
  })

  const reset = () => {
    resetFunction()
  }

  const winResult = () => {
    switch (wonLostDraw) {
      case 'WON':
        return 'YOU WON'

      case 'LOST':
        return 'YOU LOSE'

      default:
        return 'IT IS DRAW'
    }
  }

  return (
    <Background>
      <UserAnswerSection>
        <UserAnswer>
          <Heading>YOU</Heading>
          <ImageElement src={choosenUrl} alt="your choice" />
        </UserAnswer>
        <SystemUser>
          <Heading>OPPONENT</Heading>
          <ImageElement src={computerUrl} alt="opponent choice" />
        </SystemUser>
      </UserAnswerSection>
      <ResultHeading>{winResult()}</ResultHeading>

      <PlayButton onClick={reset}>PLAY AGAIN</PlayButton>
    </Background>
  )
}

export default GameResult
