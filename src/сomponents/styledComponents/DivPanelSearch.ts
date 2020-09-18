import styled from 'styled-components'
export const DivPanelSearch = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`