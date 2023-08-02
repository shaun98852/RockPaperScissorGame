import styled from 'styled-components'

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const UserAnswerSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const UserAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: roboto;
  color: #ffffff;
`

export const ResultHeading = styled.p`
  font-family: roboto;
  color: #ffffff;
  text-align: center;
`

export const PlayButton = styled.button`
  border-style: none;
  background-color: #ffffff;
  border-radius: 10px;
  font-family: Bree Serif;
  width: 200px;
  height: 50px;
  font-size: 18px;
`

export const ImageElement = styled.img`
  height: 150px;
`

export const SystemUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
