import {
  HeaderBox,
  IconNamesBox,
  ScoreBox,
  Heading,
  ScoreHeading,
  IconHeading,
} from './styledComponents'

const Header = props => {
  const {requiredScore} = props
  const {score} = requiredScore

  return (
    <HeaderBox>
      <IconNamesBox>
        <IconHeading>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </IconHeading>
      </IconNamesBox>
      <ScoreBox>
        <Heading>Score</Heading>
        <ScoreHeading>{score}</ScoreHeading>
      </ScoreBox>
    </HeaderBox>
  )
}

export default Header
