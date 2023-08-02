import {Component} from 'react'

// import React from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Icons from '../Icons'
import Header from '../ScoreHeader'
import GameResult from '../GameResult'

import {
  Background,
  IconsBox,
  UnorderedList,
  ListItem,
  Secondbox,
  PopupButton,
  PopupContainer,
  PopupImage,
  CrossButton,
  Container,
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

// const winLoseDrawCases = {
//   won: 'WON',
//   lost: 'LOST',
//   draw: 'DRAW',
// }

class PlayingView extends Component {
  state = {
    choosenIcon: '',
    ComputerValue: '',
    showResult: true,
    wonLostDraw: '',
    score: 0,
  }

  changeScore = () => {
    const {wonLostDraw} = this.state
    if (wonLostDraw === 'WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (wonLostDraw === 'LOST') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  choosenIconFunction = id => {
    const RandomNumber = Math.floor(Math.random() * 3)
    this.setState(
      {
        choosenIcon: id,
        ComputerValue: choicesList[RandomNumber].id,
        showResult: false,
      },
      this.switchCase,
      this.changeScore,
    )
  }

  resetPage = () => {
    this.setState({
      choosenIcon: '',
      ComputerValue: '',
      showResult: true,
      wonLostDraw: '',
    })
  }

  iconsBox = () => (
    <IconsBox>
      <UnorderedList>
        {choicesList.map(eachItem => (
          <ListItem key={eachItem.id}>
            <Icons
              icon={eachItem}
              requiredFunction={this.choosenIconFunction}
            />
          </ListItem>
        ))}
      </UnorderedList>
    </IconsBox>
  )

  switchCase = () => {
    const {choosenIcon, ComputerValue} = this.state
    let finalResult
    if (choosenIcon === ComputerValue) {
      finalResult = ''
    } else if (choosenIcon === 'ROCK') {
      if (ComputerValue === 'PAPER') {
        finalResult = 'LOST'
      }
      if (ComputerValue === 'SCISSORS') {
        finalResult = 'WON'
      }
    } else if (choosenIcon === 'PAPER') {
      if (ComputerValue === 'ROCK') {
        finalResult = 'WON'
      }
      if (ComputerValue === 'SCISSORS') {
        finalResult = 'LOST'
      }
    } else if (choosenIcon === 'SCISSORS') {
      if (ComputerValue === 'PAPER') {
        finalResult = 'WON'
      }
      if (ComputerValue === 'ROCK') {
        finalResult = 'LOST'
      }
    }

    this.setState({wonLostDraw: finalResult}, this.changeScore)
  }

  popup = () => (
    <Container>
      <Popup modal trigger={<PopupButton>Rules</PopupButton>}>
        {close => (
          <>
            <PopupContainer>
              <CrossButton
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </CrossButton>
              <PopupImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          </>
        )}
      </Popup>
    </Container>
  )

  render() {
    const {
      showResult,
      choosenIcon,
      ComputerValue,
      wonLostDraw,
      score,
    } = this.state

    return (
      <Background>
        <Header requiredScore={{score}} />
        <Secondbox>
          {showResult && this.iconsBox()}

          {!showResult && (
            <GameResult
              resetFunction={this.resetPage}
              values={{choosenIcon, ComputerValue, wonLostDraw}}
            />
          )}
        </Secondbox>
        {this.popup()}
      </Background>
    )
  }
}

export default PlayingView
