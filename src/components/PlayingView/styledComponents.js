import styled from 'styled-components'

export const Background = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const IconsBox = styled.div`
  border-style: none;
  border-radius: 5px;
  width: 400px;
`

export const UnorderedList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const ListItem = styled.li``

export const Secondbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 500px;
  flex-shrink: 0;
  flex-grow: 0;
`

export const PopupButton = styled.button`
  background-color: #ffffff;
  border-radius: 5px;
  color: #223a5f;
  font-family: Bree serif;
  width: 70px;
  height: 45px;
  font-size: 18px;
`

export const PopupContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const PopupImage = styled.img`
  height: 300px;
`

export const CrossButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  align-self: flex-end;
  border-style: none;
  background-color: lightgray;
`

export const Container = styled.div`
  padding: 30px;
  align-self: flex-end;
  margin-bottom: 20px;
`
