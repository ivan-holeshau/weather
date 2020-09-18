import styled from 'styled-components'
export const Div = styled.div<{styleDiv:string}>`
  display: flex;
  flex-direction: ${props => props.styleDiv};
  width: 100%;
`

export const Picture = styled.div<{code:string}>`
background: url('/weather/64/${props => props.code}.png');
height: 64px;
width:  64px;
background-size:contain;
`

