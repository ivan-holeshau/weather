import styled from 'styled-components'

export const DivRows = styled.div`
  display: flex;
  flex-direction: rows;
  width: 100%;
`
export const Div = styled.div`
  display: flex;
  flex-direction: ${props => props.styleDiv};
  width: 100%;
`
export const MenuItemList = styled.div`
  border: 1px solid;
  border-bottom-left-radius: 20px;
  max-height: 180px;
  overflow: auto;
  transition-property: all;
  transition-duration: 8s;
`
