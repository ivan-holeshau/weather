import styled, {StyledProps} from 'styled-components'
import Button from '@material-ui/core/Button'


interface ButtonProps{
  variant:string
}
export const ButtonStyled = styled(Button) <{ someRandom: string ,variant:string, color?:string, onClick: () => void }>`
margin-left: ${props => props.someRandom}px;
  `
// const ButtonStyled = styled(({ someRandom, ...rest }) => <Button {...rest} />)<{
//   someRandom: number;
// }>`
// margin-left: ${props => props.someRandom}px;
// `;