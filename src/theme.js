import styled from 'styled-components'

export const DivRows = styled.div`
  display: flex;
  flex-direction: rows;
  width: 100%;
`

export const MenuItemList = styled.div`
  border: 1px solid;
  border-bottom-left-radius: 20px;
  max-height: 180px;
  overflow: auto;
  transition-property: all;
  transition-duration: 8s;
  @media (max-width: 767px) {
    margin:5px
  }
`

export const WeatherSearchPanel = styled.div`
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (max-width: 280px) {
    width: 99%;
  }
`
